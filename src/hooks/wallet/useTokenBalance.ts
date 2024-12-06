import { TokenAddress } from '@/types/token';
import { fromTokenAddress } from '@/helpers/address';
import { useWalletBalances } from '@/store/hooks/wallet';

export default function useTokenBalance(address: TokenAddress): string | undefined {
  const balances = useWalletBalances();
  if (balances) return balances[fromTokenAddress(address)] ?? '0';
  return undefined;
}
