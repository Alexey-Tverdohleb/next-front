'use client';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';
// import { useWalletConnector } from '@/state/user/hooks'

import { CardanoContextType } from './types';

const DEFAULT_VALUE: CardanoContextType = {
  baseWalletApi: undefined,
};

export const CardanoContext = createContext<CardanoContextType>(DEFAULT_VALUE);

export function CardanoProvider({ children }: PropsWithChildren) {
  const walletConnector = 'asdf'; // useWalletConnector()

  const [contextValue, setContextValue] = useState(DEFAULT_VALUE);

  useEffect(() => {
    if (!walletConnector) return;

    const load = async () => {
      const libs = await Promise.all([import('@/cardano/baseWallet')]);

      const [baseWalletApi] = await Promise.all(
        libs.map(async (m) => {
          if (m) await m.cardanoInit();
          return m;
        })
      );

      setContextValue({
        baseWalletApi,
      });
    };
    load();
  }, [walletConnector]);

  return <CardanoContext.Provider value={contextValue}> {children} </CardanoContext.Provider>;
}
