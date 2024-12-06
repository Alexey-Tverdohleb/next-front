import { useCallback, useEffect, useReducer } from 'react';

import useWallet from '.';
import useCardano from '../cardano';

export default function useAddresses(): string[] {
  const { wallet } = useWallet();
  const { baseWalletApi: api } = useCardano();

  const reducer = useCallback((state: string[], keyHash: string) => [...state, keyHash], []);
  const [keyHashes, addKeyHash] = useReducer(reducer, []);

  useEffect(() => {
    if (wallet?.getUsedAddresses && api) {
      wallet.getUsedAddresses().then((addresses) => {
        new Set(addresses).forEach(addKeyHash);
      });
    }
  }, [api, wallet, addKeyHash]);

  return keyHashes;
}
