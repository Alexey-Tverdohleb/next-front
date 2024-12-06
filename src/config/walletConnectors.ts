export enum ConnectorName {
  Nami = 'nami',
  Gero = 'gerowallet',
  Eternl = 'eternl',
  Flint = 'flint',
  Typhon = 'typhoncip30',
  Nufi = 'nufi',
  Begin = 'begin',
  Exodus = 'exodus',
  Yoroi = 'yoroi',
}

export interface ConnectorConfig {
  title: string;
  icon: unknown;
  connectorId: ConnectorName | string;
  experimental?: boolean;
  detected?: boolean;
  url?: string;
}

export const CONNECTOR_CONFIGURATIONS: { [name: string]: ConnectorConfig } = {
  [ConnectorName.Nami]: {
    title: 'Nami Wallet',
    icon: undefined,
    connectorId: ConnectorName.Nami,
    url: 'https://namiwallet.io/',
  },
  [ConnectorName.Gero]: {
    title: 'Gero Wallet',
    icon: undefined,
    connectorId: ConnectorName.Gero,
    url: 'https://www.gerowallet.io/',
  },
  [ConnectorName.Eternl]: {
    title: 'Eternl Wallet',
    icon: undefined,
    connectorId: ConnectorName.Eternl,
    url: 'https://chrome.google.com/webstore/detail/ccvaultio/kmhcihpebfmpgmihbkipmjlmmioameka',
  },
  [ConnectorName.Flint]: {
    title: 'Flint Wallet',
    icon: undefined,
    connectorId: ConnectorName.Flint,
    url: 'https://chrome.google.com/webstore/detail/flint/hnhobjmcibchnmglfbldbfabcgaknlkj/related?hl=en',
  },
  [ConnectorName.Typhon]: {
    title: 'Typhon Wallet',
    icon: undefined,
    connectorId: ConnectorName.Typhon,
    url: 'https://chrome.google.com/webstore/detail/typhon-wallet/kfdniefadaanbjodldohaedphafoffoh',
  },
  [ConnectorName.Nufi]: {
    title: 'Nufi Wallet',
    icon: undefined,
    connectorId: ConnectorName.Nufi,
    url: 'https://nu.fi/',
  },
  [ConnectorName.Yoroi]: {
    title: 'Yoroi Wallet',
    icon: undefined,
    connectorId: ConnectorName.Yoroi,
    url: 'https://yoroi-wallet.com/',
  },
  [ConnectorName.Exodus]: {
    title: 'Exodus Wallet',
    icon: undefined,
    connectorId: ConnectorName.Exodus,
    url: 'https://exodus.com/',
    experimental: true,
  },
  [ConnectorName.Begin]: {
    title: 'Begin Wallet',
    icon: undefined,
    connectorId: ConnectorName.Begin,
    url: 'https://begin.is/',
  },
};

export const CONNECTORS: ConnectorName[] = [
  ConnectorName.Nami,
  ConnectorName.Eternl,
  ConnectorName.Typhon,
  ConnectorName.Gero,
  ConnectorName.Flint,
];
