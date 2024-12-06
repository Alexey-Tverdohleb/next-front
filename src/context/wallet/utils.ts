import { ConnectorName } from '@/config/walletConnectors';

import { initCardanoDAppConnectorBridge } from './cardano-dapp-connector-bridge';
import {
  enable,
  getBalance,
  getChangeAddress,
  getCollateral,
  getNetworkId,
  getRewardAddresses,
  getUnusedAddresses,
  getUsedAddresses,
  getUtxos,
  signData,
  signTx,
  submitTx,
} from './helpers';
import { WalletApiType, WalletProtoApiType } from './types';

async function dAppEnable(connId: ConnectorName | string) {
  let wallet: WalletProtoApiType | undefined;
  let dAppFeeAddress: string | undefined;
  await initCardanoDAppConnectorBridge(
    async (initApi: {
      name: string;
      enable: () => WalletProtoApiType;
      experimental?: { feeAddress?: string };
    }) => {
      if (initApi.name === connId) {
        wallet = await initApi.enable();
        dAppFeeAddress = initApi.experimental?.feeAddress ?? undefined;
      }
    }
  );
  // Block and wait until we have really connected
  let counter = 50;
  const waitForWallet = async () => {
    if (!wallet && counter > 0) {
      counter -= 1;
      // eslint-disable-next-line no-promise-executor-return
      await new Promise((r) => setTimeout(r, 200));
      await waitForWallet();
    }
  };
  await waitForWallet();
  // Check if we have connected or timeouted
  if (!wallet) throw new Error(`Could not init wallet properly: ${wallet}!`);
  return { wallet, dAppFeeAddress };
}

export async function enableWalletFn(
  type: 'normal' | 'dapp',
  connId: ConnectorName | string
): Promise<WalletApiType> {
  let wallet;
  let dAppFeeAddress: string | undefined;

  if (type === 'normal') {
    wallet = await enable(connId);
  } else if (type === 'dapp') {
    const dAppRes = await dAppEnable(connId);
    wallet = dAppRes.wallet;
    dAppFeeAddress = dAppRes.dAppFeeAddress;
  } else {
    throw new Error(`Unknown connection type: ${type}`);
  }

  const walletConfig = { wallet, connectorId: connId };
  return {
    getNetworkId: () => getNetworkId(walletConfig),
    getUtxos: (amount?: unknown, paginate?: unknown) => getUtxos(walletConfig, amount, paginate),
    getBalance: () => getBalance(walletConfig),
    getUsedAddresses: (paginate?: unknown) => getUsedAddresses(walletConfig, paginate),
    getUnusedAddresses: () => getUnusedAddresses(walletConfig),
    getChangeAddress: () => getChangeAddress(walletConfig),
    getRewardAddresses: () => getRewardAddresses(walletConfig),
    signTx: (tx?: unknown, partialSign?: boolean) => signTx(walletConfig, tx, partialSign),
    signData: (addr: unknown, sigStructure: unknown) => signData(walletConfig, addr, sigStructure),
    submitTx: (tx: unknown) => submitTx(walletConfig, tx),
    getCollateral: () => getCollateral(walletConfig),
    isDAppConnector: () => type === 'dapp',
    dAppFeeAddress: () => dAppFeeAddress,
  };
}
