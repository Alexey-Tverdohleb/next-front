'use client';

import { ConnectorName } from '@/config/walletConnectors';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { useResetWalletState } from '@/store/hooks/wallet';
import WalletUpdater from '@/store/reducers/walletSlice/Updater';

import { retreiveWalletApi } from './helpers';
import { WalletApiType, WalletContextType } from './types';
import { enableWalletFn } from './utils';

// TODO pjordan: Reintroduce user store to store preferences and last connected wallet
// import { useDisconnectWallet, useUpdateWalletConnector, useWalletConnector } from '@/state/user/hooks'
// TODO pjordan: After that also reintroduce quick connect
// import WalletQuickConnect from './quickConnect'

export const WalletContext = createContext<WalletContextType | undefined>(undefined);

function useConnectWallet(setWallet: Dispatch<SetStateAction<WalletApiType | undefined>>) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const updateWalletConnector = useCallback((_a: string, _b: boolean) => {}, []); // useUpdateWalletConnector()

  const enableWallet = useCallback(
    async (
      type: 'normal' | 'dapp',
      connId: ConnectorName | string,
      notifications = true,
      noThrow = true
    ) => {
      let walletApi;
      try {
        walletApi = await enableWalletFn(type, connId);
        if (notifications) {
          // TODO pjordan: Add notifications
          console.log('Success!');
          /*           success(
                      <>
                        <Text variant="subheading">Successfully Connected!</Text>
                        <Text variant="regular">Connected to your {connId} wallet</Text>
                      </>,
                    ) */
        }
      } catch (err) {
        if (!noThrow) throw err;

        // eslint-disable-next-line no-console
        console.error(err);
        /*         if (notifications)
                  error(
                    <>
                      <Text variant="subheading">Could not Connect to Wallet</Text>
                      <Text variant="regular">
                        If the wallet extension is installed, you may need to allow access in your settings.
                      </Text>
                    </>,
                  ) */
      }

      if (walletApi) updateWalletConnector(connId, type === 'dapp');
      setWallet(walletApi);
    },
    [setWallet, updateWalletConnector]
  );

  return enableWallet;
}

function useConnectedWallet(
  setWallet: Dispatch<SetStateAction<WalletApiType | undefined>>,
  enableWallet: (
    type: 'normal' | 'dapp',
    connId: string,
    notifications?: boolean,
    noThrow?: boolean
  ) => Promise<void>
) {
  const connectorId: string | undefined = undefined; // useWalletConnector()

  const resetWalletState = useResetWalletState();
  const disconnectWallet = useCallback(() => {}, []); // useDisconnectWallet()
  const disableWallet = useCallback(
    async (notifications = true) => {
      setWallet(undefined);
      disconnectWallet();
      resetWalletState();
      if (notifications) {
        console.log('disabled wallet!');
        /*         success(
                  <>
                    <Text variant="subheading">Successfully Disconnected!</Text>
                    <Text variant="regular">
                      You can always reconnect instantly. To learn how to disconnect your wallet completetly check out our
                      guide.
                    </Text>
                  </>,
                ) */
      }
    },
    [setWallet, disconnectWallet, resetWalletState]
  );

  const [reloading, setReloading] = useState(false);
  const reloadWallet = useCallback(
    async (notifications?: boolean) => {
      setReloading(true);
      // TODO pjordan: Add support for DApp
      if (!reloading) {
        try {
          disconnectWallet();
          resetWalletState();
          let enabled = false;
          let retries = 0;
          while (!enabled && retries < 10) {
            enabled = true;
            try {
              // eslint-disable-next-line no-await-in-loop
              await enableWallet('normal', connectorId as unknown as string, false, false);
            } catch (err) {
              enabled = false;
            }
            retries += 1;
          }
          if (notifications) {
            console.log('Reloaded wallet');
            /*            success(
                          <>
                            <Text variant="subheading">Switched Wallet!</Text>
                            <Text variant="regular">
                              We detected that you switched your connected wallet and reloaded correspondingly for you.
                            </Text>
                          </>,
                        ) */
          }
        } catch {
          console.error('Could not switch wallet');
          /*           error(
                      <>
                        <Text variant="subheading">Could not Switch Wallet</Text>
                        <Text variant="regular">
                          We detected that you switched your connected wallet. We couldn&apos;t reload it properly. <br />
                          Please reload the page.
                        </Text>
                      </>,
                    ) */
        }
      }
    },
    [reloading, disconnectWallet, resetWalletState, enableWallet, connectorId]
  );
  return useMemo(
    () => ({
      disableWallet,
      reloadWallet,
    }),
    [disableWallet, reloadWallet]
  );
}

export function WalletProvider({ children }: PropsWithChildren) {
  const isWalletInstalled = useCallback((connId: ConnectorName | string) => {
    try {
      retreiveWalletApi(connId, { globalFallback: false });
      return true;
    } catch (err) {
      return false;
    }
  }, []);

  const connectorId = undefined; // useWalletConnector()
  const [wallet, setWallet] = useState<WalletApiType>();

  const enableWallet = useConnectWallet(setWallet);
  const { disableWallet, reloadWallet } = useConnectedWallet(setWallet, enableWallet);

  const contextValue = useMemo(
    () => ({
      isWalletEnabled: !!wallet,
      isWalletInstalled,
      connectorId,
      wallet,
      enableWallet,
      reloadWallet,
      disableWallet,
    }),
    [connectorId, disableWallet, enableWallet, isWalletInstalled, reloadWallet, wallet]
  );

  return (
    <WalletContext.Provider value={contextValue}>
      {/*       {!wallet && <WalletQuickConnect />} */}
      {!!wallet && <WalletUpdater />}
      {children}
    </WalletContext.Provider>
  );
}
