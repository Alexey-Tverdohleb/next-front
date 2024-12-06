export interface IBalanceState {
  [address: string]: string;
}

export interface IWalletState {
  address?: string;
  balances: IBalanceState | undefined;
  adaHandles: string[] | undefined;
  // TODO pjordan: Patch dev options back in
  // disableUpdates: { [key in keyof IWalletState]?: boolean }
  // overrides: {
  //   address?: string // bech32 address
  //   stakeKey?: string // bech32 stakeKey
  //   ignoreBalance?: boolean
  // }
}
