import { TOKEN_ADA } from '@/config/tokenConstants';
import { useWalletBalances } from '@/store/hooks/wallet';
import { fromNativeAmount } from '@/helpers/numeric';
import { fromTokenAddress } from '@/helpers/address';

export default function useBalance() {
  const balances = useWalletBalances();
  if (balances) return fromNativeAmount(balances[fromTokenAddress(TOKEN_ADA.address)], 6);

  return undefined;
}
