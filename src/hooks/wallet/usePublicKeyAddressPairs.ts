import { useEffect, useState } from 'react';

import useWallet from '.';
import useCardano from '../cardano';

export type PublicKeyAddressPair = { pubKeyHash: string; address: string };

export default function usePublicKeyAddressPairs(): PublicKeyAddressPair[] {
  const { wallet } = useWallet();
  const { baseWalletApi: api } = useCardano();

  const [pubKeyHashes, setPubKeyHashes] = useState<PublicKeyAddressPair[]>([]);

  useEffect(() => {
    const helper = async () => {
      const pkhs: PublicKeyAddressPair[] = [];
      if (wallet?.getUsedAddresses && api) {
        const addresses = Object.values(await wallet.getUsedAddresses());

        await addresses.forEach(async (address) => {
          const pkh = await api.getPublicKeyHash(address);
          if (pkh) pkhs.push({ pubKeyHash: pkh, address });
        });
      }
      return pkhs;
    };

    helper().then((pkhs) => setPubKeyHashes(pkhs));
  }, [api, wallet, setPubKeyHashes]);

  return pubKeyHashes;
}