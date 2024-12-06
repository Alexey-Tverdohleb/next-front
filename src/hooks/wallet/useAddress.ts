import { useEffect, useState } from 'react';

import useWallet from '.';
import useCardano from '../cardano';

export default function useAddress() {
  const { wallet } = useWallet();
  const { baseWalletApi: api } = useCardano();

  const [address, setAddress] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (wallet && api) {
      api.getWalletAddress(wallet).then((addr: string) => {
        if (addr) {
          setAddress(addr);
        }
      });
    } else {
      setAddress(undefined);
    }
  }, [wallet, api]);

  return address;
}
