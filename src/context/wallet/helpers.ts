/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CONNECTOR_CONFIGURATIONS,
  ConnectorConfig,
  ConnectorName,
} from '@/config/walletConnectors';
// import { WalletError, WalletErrorTypes } from 'hooks/useOnWalletInteraction/index'

import {
  Address,
  Bytes,
  CBOR,
  Hash32,
  Paginate,
  SigStructure,
  Transaction,
  TransactionUnspentOutput,
  TransactionWitnessSet,
  Value,
  WalletConfig,
} from './types';
import { WalletError, WalletErrorTypes } from '@/hooks/useOnWalletInteraction/types';

enum WalletApiErrorType {
  INJECTION_ERR,
  UNKNOWN_CONN_ID,
  UNKNOWN_METHOD,
  NOT_ENABLED,
  UNSUPPORTED,
}

interface WalletApiError {
  type: WalletApiErrorType;
  message?: string;
}

const newWalletError = (type: WalletApiErrorType, message?: string): WalletApiError => ({
  type,
  message: `${WalletApiErrorType[type]}: ${message}`,
});

function commonError(err: any) {
  switch (err.code) {
    case -4:
      throw new WalletError(WalletErrorTypes.ACCOUNT_CHANGED, err.info);
    case -3:
      throw new WalletError(WalletErrorTypes.REFUSED, err.info);
    case -2:
      throw new WalletError(WalletErrorTypes.INTERNAL, err.info);
    case -1:
      throw new WalletError(WalletErrorTypes.INVALID, err.info);
    case 1:
      throw new WalletError(WalletErrorTypes.PROOF_GENERATION, err.info);
    case 2:
      throw new WalletError(WalletErrorTypes.ADDRESS_NOT_PK, err.info);
    case 3:
      throw new WalletError(WalletErrorTypes.USER_DECLINED, err.info);
    default:
      throw err;
  }
}

const IGNORED_KEYS = [
  'typhon',
  'ccvault',
  'enable',
  'isEnabled',
  'getBalance',
  'signData',
  'signTx',
  'submitTx',
  'getUtxos',
  'getCollateral',
  'getUsedAddresses',
  'getUnusedAddresses',
  'getChangeAddress',
  'getChangeAddresses',
  'getRewardAddress',
  'getRewardAddresses',
  'getNetworkId',
  'onAccountChange',
  'onNetworkChange',
  'off',
  '_events',
  'experimental',
];

export function getConnectorNames(): (ConnectorName | string)[] {
  if (!window.cardano) return [];
  return Object.keys(window.cardano).filter((id) => !IGNORED_KEYS.includes(id));
}

let CONNECTOR_CONFIGS: ConnectorConfig[] | null;
export const setConnectorConfigs = async (configs: ConnectorConfig[]) => {
  CONNECTOR_CONFIGS = configs;
};

export function getConnectorConfigs(): ConnectorConfig[] {
  if (CONNECTOR_CONFIGS)
    return CONNECTOR_CONFIGS.sort(({ connectorId: idA }, { connectorId: idB }) => {
      const len = Object.values(ConnectorName).length;
      const pos = Object.fromEntries(Object.values(ConnectorName).map((v, i) => [v, i]));
      return (pos[idA] ?? len) - (pos[idB] ?? -len);
    }).map((c) => {
      if ((Object.values(ConnectorName) as string[]).includes(c.connectorId))
        return CONNECTOR_CONFIGURATIONS[c.connectorId];
      return c;
    });

  if (!window.cardano) return [];
  return Object.keys(window.cardano)
    .filter((id) => !IGNORED_KEYS.includes(id))
    .sort((idA, idB) => {
      const len = Object.values(ConnectorName).length;
      const pos = Object.fromEntries(Object.values(ConnectorName).map((v, i) => [v, i]));
      return (pos[idA] ?? len) - (pos[idB] ?? -len);
    })
    .map((id) => {
      if ((Object.values(ConnectorName) as string[]).includes(id))
        return { ...CONNECTOR_CONFIGURATIONS[id], detected: true };
      return {
        title: window.cardano[id].name,
        icon: window.cardano[id].icon,
        connectorId: id,
        experimental: true,
        detected: true,
      };
    });
}

export const retreiveWalletApi = (
  connectorId: ConnectorName | string,
  options = { globalFallback: true }
) => {
  let wallet;
  switch (connectorId) {
    case ConnectorName.Nami:
      wallet = window.cardano?.nami;
      if (!wallet && options.globalFallback) {
        wallet = window.cardano;
      }
      break;
    case ConnectorName.Eternl:
      wallet = window.cardano?.eternl;
      break;
    case ConnectorName.Gero:
      wallet = window.cardano?.gerowallet;
      break;
    case ConnectorName.Flint:
      wallet = window.cardano?.flint;
      break;
    case ConnectorName.Typhon:
      wallet = window.cardano?.typhoncip30;
      break;
    case ConnectorName.Nufi:
      wallet = window.cardano?.nufi;
      break;
    case ConnectorName.Yoroi:
      wallet = window.cardano?.yoroi;
      break;
    case ConnectorName.Exodus:
      wallet = window.cardano?.exodus;
      break;
    case ConnectorName.Begin:
      wallet = window.cardano?.begin;
      break;
    default:
      if (!getConnectorNames().includes(connectorId))
        throw newWalletError(WalletApiErrorType.UNKNOWN_CONN_ID, connectorId);
      wallet = window.cardano[connectorId];
  }
  if (!wallet) {
    throw newWalletError(WalletApiErrorType.INJECTION_ERR);
  }
  return wallet;
};

let VALID_CONNECTOR_NAMES: string[] = [];
export const updateValidConnectorNames = async (connectorNames: string[]) => {
  VALID_CONNECTOR_NAMES = connectorNames;
};

export const enable = async (connectorId: ConnectorName | string) => {
  updateValidConnectorNames(getConnectorNames());
  const wallet = retreiveWalletApi(connectorId);

  if (!wallet.enable) {
    throw newWalletError(WalletApiErrorType.INJECTION_ERR, 'Could not find enable function');
  }

  if (VALID_CONNECTOR_NAMES.includes(connectorId)) {
    if (connectorId === ConnectorName.Nami) {
      if (!window.cardano?.nami) {
        wallet.enable();
        return window.cardano;
      }
    }
    return wallet.enable();
  }
  throw newWalletError(WalletApiErrorType.UNKNOWN_CONN_ID, connectorId);
};

// Might be better to return the wallet API instead of true and false
export const isEnabled = async (connectorId: ConnectorName | string, noThrow?: boolean) => {
  let wallet;
  try {
    wallet = retreiveWalletApi(connectorId);
  } catch {
    if (!noThrow)
      throw newWalletError(
        WalletApiErrorType.INJECTION_ERR,
        'Can not check status for uninjected wallet'
      );
    return false;
  }

  if (!wallet.isEnabled) {
    return newWalletError(WalletApiErrorType.INJECTION_ERR, 'Could not find isEnabled function');
  }

  return wallet.isEnabled();
};

export const getNetworkId = async ({ wallet, connectorId }: WalletConfig): Promise<number> => {
  if (VALID_CONNECTOR_NAMES.includes(connectorId)) {
    return wallet.getNetworkId();
  }
  throw newWalletError(WalletApiErrorType.UNKNOWN_CONN_ID, connectorId);
};

export const getUtxos = async (
  { wallet, connectorId }: WalletConfig,
  amount?: CBOR<Value>,
  paginate?: Paginate
): Promise<TransactionUnspentOutput[] | undefined> => {
  try {
    if (VALID_CONNECTOR_NAMES.includes(connectorId)) {
      if (amount === undefined && paginate === undefined) {
        return wallet.getUtxos();
      }
      if (paginate == null) {
        return wallet.getUtxos(amount);
      }
      return wallet.getUtxos(amount, paginate);
    }
    throw newWalletError(WalletApiErrorType.UNKNOWN_CONN_ID, connectorId);
  } catch (err: any) {
    // TODO pjordan: Add paginate error codes
    commonError(err);
    throw err;
  }
};

export const getBalance = async ({ wallet, connectorId }: WalletConfig): Promise<CBOR<Value>> => {
  try {
    if (VALID_CONNECTOR_NAMES.includes(connectorId)) {
      return wallet.getBalance();
    }
    throw newWalletError(WalletApiErrorType.UNKNOWN_CONN_ID, connectorId);
  } catch (err: any) {
    commonError(err);
    throw err;
  }
};

export const getUsedAddresses = async (
  { wallet, connectorId }: WalletConfig,
  paginate?: Paginate
): Promise<CBOR<Address>[]> => {
  try {
    if (VALID_CONNECTOR_NAMES.includes(connectorId)) {
      if (paginate === undefined) {
        return wallet.getUsedAddresses();
      }
      return wallet.getUsedAddresses(paginate);
    }
    throw newWalletError(WalletApiErrorType.UNKNOWN_CONN_ID, connectorId);
  } catch (err: any) {
    commonError(err);
    throw err;
  }
};

export const getUnusedAddresses = async ({
  wallet,
  connectorId,
}: WalletConfig): Promise<CBOR<Address>[]> => {
  try {
    if (VALID_CONNECTOR_NAMES.includes(connectorId)) {
      return wallet.getUnusedAddresses();
    }
    throw newWalletError(WalletApiErrorType.UNKNOWN_CONN_ID, connectorId);
  } catch (err: any) {
    commonError(err);
    throw err;
  }
};

export const getChangeAddress = async ({
  wallet,
  connectorId,
}: WalletConfig): Promise<CBOR<Address>> => {
  try {
    if (VALID_CONNECTOR_NAMES.includes(connectorId)) {
      return wallet.getChangeAddress();
    }
    throw newWalletError(WalletApiErrorType.UNKNOWN_CONN_ID, connectorId);
  } catch (err: any) {
    commonError(err);
    throw err;
  }
};

export const getRewardAddresses = async ({
  wallet,
  connectorId,
}: WalletConfig): Promise<CBOR<Address>[]> => {
  try {
    if (VALID_CONNECTOR_NAMES.includes(connectorId)) {
      return wallet.getRewardAddresses();
    }
    throw newWalletError(WalletApiErrorType.UNKNOWN_CONN_ID, connectorId);
  } catch (err: any) {
    commonError(err);
    throw err;
  }
};

export const signTx = async (
  { wallet, connectorId }: WalletConfig,
  tx: CBOR<Transaction>,
  partialSign?: boolean
): Promise<CBOR<TransactionWitnessSet>> => {
  try {
    if (VALID_CONNECTOR_NAMES.includes(connectorId)) {
      if (partialSign === undefined) {
        return wallet.signTx(tx);
      }
      return wallet.signTx(tx, partialSign);
    }
    throw newWalletError(WalletApiErrorType.UNKNOWN_CONN_ID, connectorId);
  } catch (err: any) {
    if (err.code < 0) commonError(err);
    else {
      switch (err.code) {
        case 1:
          throw new WalletError(WalletErrorTypes.PROOF_GENERATION, err.info);
        case 2:
          throw new WalletError(WalletErrorTypes.USER_DECLINED, err.info);
        default:
      }
    }
    throw err;
  }
};

export const signData = async (
  { wallet, connectorId }: WalletConfig,
  addr: Address,
  sigStructure: CBOR<SigStructure>
): Promise<Bytes> => {
  try {
    if (VALID_CONNECTOR_NAMES.includes(connectorId)) {
      return wallet.signData(addr, sigStructure);
    }
    throw newWalletError(WalletApiErrorType.UNKNOWN_CONN_ID, connectorId);
  } catch (err: any) {
    if (err.code < 0) commonError(err);
    else {
      switch (err.code) {
        case 1:
          throw new WalletError(WalletErrorTypes.PROOF_GENERATION, err.info);
        case 2:
          throw new WalletError(WalletErrorTypes.ADDRESS_NOT_PK, err.info);
        case 3:
          throw new WalletError(WalletErrorTypes.USER_DECLINED, err.info);
        default:
      }
    }
    throw err;
  }
};

export const submitTx = async (
  { wallet, connectorId }: WalletConfig,
  tx: CBOR<Transaction>
): Promise<Hash32> => {
  try {
    if (VALID_CONNECTOR_NAMES.includes(connectorId)) {
      return wallet.submitTx(tx);
    }
    throw newWalletError(WalletApiErrorType.UNKNOWN_CONN_ID, connectorId);
  } catch (err: any) {
    if (err.code < 0) commonError(err);
    else {
      switch (err.code) {
        case 1:
          throw new WalletError(WalletErrorTypes.SEND_REFUSED, err.info);
        case 2:
          throw new WalletError(WalletErrorTypes.SEND_FAILED, err.info);
        default:
      }
    }
    throw err;
  }
};

// NOTE pjordan: Technically this should be CBOR, therefore a hex of Cardano.Value.to_bytes()
const DEFAULT_COLLATERAL_AMOUNT = '3000000';
export const getCollateral = async ({
  wallet,
  connectorId,
}: WalletConfig): Promise<TransactionUnspentOutput[]> => {
  try {
    if (VALID_CONNECTOR_NAMES.includes(connectorId)) {
      if (connectorId === ConnectorName.Nami) {
        return wallet.experimental!.getCollateral!();
      }
      if (connectorId === ConnectorName.Gero) {
        // filter out empty strings
        return (await wallet.getCollateral!()).filter((c) => c && c !== '');
      }
      if (connectorId === ConnectorName.Yoroi) {
        return wallet.getCollateral!(DEFAULT_COLLATERAL_AMOUNT); // set a default collateral of 5 ADA for yoroi user
      }
      // TODO pjordan: Replace this after thorough testing
      // return wallet.getCollateral({ amount: DEFAULT_COLLATERAL_AMOUNT })
      return wallet.getCollateral!();
    }
    throw newWalletError(WalletApiErrorType.UNKNOWN_CONN_ID, connectorId);
  } catch (err: any) {
    commonError(err);
    throw err;
  }
};
