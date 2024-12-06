import useCardano from '@/hooks/cardano';
import useWallet from '@/hooks/wallet';
import { useCallback, useEffect } from 'react';
import { useInterval } from 'react-use';

import {
  useRefreshAdaHandles,
  useRefreshWalletBalances,
  useUpdateWalletAddress,
  useWalletAddress,
} from '../../hooks/wallet';

export default function WalletUpdater() {
  const { wallet, reloadWallet } = useWallet();
  const { baseWalletApi: api } = useCardano();

  const refreshBalances = useRefreshWalletBalances();
  const refreshAdaHandles = useRefreshAdaHandles();
  const prevAddress = useWalletAddress();
  const updateAddress = useUpdateWalletAddress();

  const checkNetworkAndAddress = useCallback(
    async (notifications?: boolean) => {
      if (wallet && api) {
        let currAddress;
        try {
          currAddress = await api.getWalletAddress(wallet);
        } catch (err) {
          if ((err as Error).message === 'account changed') currAddress = undefined;
        }

        // Check the address
        if (currAddress !== prevAddress) {
          updateAddress(currAddress);
          if (prevAddress) {
            reloadWallet(notifications);
            return;
          }
        }

        // TODO pjordan: Add network checks back in
      }
    },
    [api, prevAddress, reloadWallet, updateAddress, wallet]
  );

  // Initial load
  useEffect(() => {
    if (wallet && api) {
      console.log('Connected wallet, initializing balances, etc');
      refreshBalances();
      refreshAdaHandles();
      checkNetworkAndAddress(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet, api]);

  useInterval(() => {
    // Only reload if document is in focus
    if (!document.hasFocus()) return;

    // Check the network id and address and reload wallet if necessary
    checkNetworkAndAddress(true);
  }, 3000);

  useInterval(() => {
    // Only reload if document is in focus
    if (!document.hasFocus()) return;

    // Update balances
    refreshBalances();
  }, 10000);

  return undefined;
}
