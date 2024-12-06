import { useCallback, useEffect, useReducer } from 'react';

import useWallet from '.';
import useCardano from '../cardano';

export type StakeKey = string;
export default function useStakeKeys(): StakeKey[] {
  const { wallet } = useWallet();
  const { baseWalletApi: api } = useCardano();

  const reducer = useCallback((state: StakeKey[], keyHash: StakeKey) => [...state, keyHash], []);
  const [keyHashes, addKeyHash] = useReducer(reducer, []);

  useEffect(() => {
    if (wallet?.getUsedAddresses && api) {
      wallet.getUsedAddresses().then((addresses) => {
        new Set(addresses).forEach((k) => {
          const stakeKey = k.substring(58);
          if (!keyHashes.includes(stakeKey)) addKeyHash(stakeKey);
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api, wallet, addKeyHash]);

  return keyHashes;
}
