import { useWalletBalances } from '@/store/hooks/wallet';
import { IBalanceState } from '@/store/reducers/walletSlice/types';

export default function useTokenBalances(): IBalanceState | undefined {
  return useWalletBalances();
}
