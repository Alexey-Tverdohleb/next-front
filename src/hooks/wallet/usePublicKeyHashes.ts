import { useEffect, useState } from 'react';

import useWallet from '.';
import useCardano from '../cardano';

export type PublicKeyHash = string;
export default function usePublicKeyHashes(): PublicKeyHash[] {
  const { wallet } = useWallet();
  const { baseWalletApi: api } = useCardano();

  const [pubKeyHashes, setPubKeyHashes] = useState<PublicKeyHash[]>([]);

  useEffect(() => {
    const helper = async () => {
      const pkhs: PublicKeyHash[] = [];
      if (wallet?.getUsedAddresses && api) {
        const addresses = Object.values(await wallet.getUsedAddresses());

        await addresses.forEach(async (address) => {
          const pkh = await api.getPublicKeyHash(address);
          if (pkh) pkhs.push(pkh);
        });
      }
      return pkhs;
    };

    helper().then((pkhs) => setPubKeyHashes(pkhs));
  }, [api, wallet, setPubKeyHashes]);

  return pubKeyHashes;
}
