/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ConnectorName } from '@/config/walletConnectors';

export type Value = number;
export type Address = any;
export type Transaction = any;
export type TransactionWitnessSet = any;
export type SigStructure = any;

export type Hash32 = any;
export type Bytes = string;
export type Hex<T> = string;
export type CBOR<T> = any;

export type TransactionUnspentOutput = CBOR<any>;
export type Paginate = any;
export type ApiError = { code: number; info: string };

export interface WalletProtoApiType {
  getNetworkId: () => Promise<number>;
  getUtxos: (
    amount?: CBOR<Value>,
    paginate?: Paginate
  ) => Promise<TransactionUnspentOutput[] | undefined>;
  getBalance: () => Promise<CBOR<Value>>;
  getUsedAddresses: (paginate?: unknown) => Promise<CBOR<Address>[]>;
  getUnusedAddresses: () => Promise<CBOR<Address>[]>;
  getChangeAddress: () => Promise<CBOR<Address>>;
  getRewardAddresses: () => Promise<CBOR<Address>[]>;
  signTx: (tx?: unknown, partialSign?: boolean) => Promise<CBOR<TransactionWitnessSet>>;
  signData: (addr: unknown, sigStructure: unknown) => Promise<Bytes>;
  submitTx: (tx: unknown) => Promise<Hash32>;
  getCollateral?: (param?: { amount: CBOR<any> } | string) => Promise<TransactionUnspentOutput[]>;
  embeddedIdentifier?: string;
  experimental?: {
    getCollateral?: (param?: { amount: CBOR<any> } | string) => Promise<TransactionUnspentOutput[]>;
  };
}

export interface WalletConfig {
  wallet: WalletProtoApiType;
  connectorId: ConnectorName | string;
  embedded?: boolean;
}

export interface WalletApiType {
  getNetworkId: () => Promise<number>;
  getUtxos: (
    amount?: CBOR<Value>,
    paginate?: Paginate
  ) => Promise<TransactionUnspentOutput[] | undefined>;
  getBalance: () => Promise<CBOR<Value>>;
  getUsedAddresses: (paginate?: unknown) => Promise<CBOR<Address>[]>;
  getUnusedAddresses: () => Promise<CBOR<Address>[]>;
  getChangeAddress: () => Promise<CBOR<Address>>;
  getRewardAddresses: () => Promise<CBOR<Address>[]>;
  signTx: (tx?: unknown, partialSign?: boolean) => Promise<CBOR<TransactionWitnessSet>>;
  signData: (addr: unknown, sigStructure: unknown) => Promise<Bytes>;
  submitTx: (tx: unknown) => Promise<Hash32>;
  getCollateral: () => Promise<TransactionUnspentOutput[]>;
  isDAppConnector: () => boolean;
  dAppFeeAddress: () => Address | null;
  embeddedIdentifier?: string;
}

export interface WalletContextType {
  connectorId: ConnectorName | string | undefined;
  wallet: WalletApiType | undefined;
  isWalletEnabled: boolean;
  isWalletInstalled: (c: ConnectorName | string) => boolean;
  enableWallet: (
    type: 'normal' | 'dapp',
    c: ConnectorName | string,
    notifications?: boolean
  ) => Promise<void>;
  reloadWallet: (notifications?: boolean) => Promise<void>;
  disableWallet: (notifications?: boolean) => Promise<void>;
}
