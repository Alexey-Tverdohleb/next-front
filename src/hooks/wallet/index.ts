import { WalletContext } from '@/context/wallet';
import { useContext } from 'react';

export default function useWallet() {
  const context = useContext(WalletContext);

  if (!context) throw new Error('Not used inside wallet context');

  return context;
}
