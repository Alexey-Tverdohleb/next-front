import { TOKEN_ADA } from '@/config/tokenConstants';
import useCardano from '@/hooks/cardano';
import useWallet from '@/hooks/wallet';
import { useCallback } from 'react';
import { fromTokenAddress } from '@/helpers/address';

import { walletSlice } from '../reducers/walletSlice';
import { IBalanceState } from '../reducers/walletSlice/types';
import useAppSelector from './useAppSelector';
import useAppDispatch from './useAppDispatch';

const { resetWalletState, updateAdaHandles, updateAddress, updateBalances } = walletSlice.actions;

export const useResetWalletState = () => {
  const dispatch = useAppDispatch();
  return useCallback(() => dispatch(resetWalletState()), [dispatch]);
};
export const useWalletAddress = (): string | undefined =>
  useAppSelector((state) => state.walletReducer.address);

export const useUpdateWalletAddress = () => {
  const dispatch = useAppDispatch();

  return useCallback(
    (address: string | undefined) => {
      dispatch(updateAddress(address));
    },
    [dispatch]
  );
};

export const useWalletBalances = (): IBalanceState | undefined =>
  useAppSelector((state) => state.walletReducer.balances);

export const useRefreshWalletBalances = () => {
  const dispatch = useAppDispatch();
  const { wallet } = useWallet();
  const { baseWalletApi: api } = useCardano();

  return useCallback(() => {
    const refresh = async () => {
      const result = await api.getAllTokenBalances(wallet);
      const balances = Object.entries(result).map(([key, value]) =>
        key === 'lovelace'
          ? [fromTokenAddress(TOKEN_ADA.address), String(value)]
          : [key, String(value)]
      );
      dispatch(updateBalances(Object.fromEntries(balances)));
    };

    if (wallet && api) refresh();
    else dispatch(updateBalances(undefined));
  }, [dispatch, wallet, api]);
};

export const useAdaHandles = (): string[] | undefined =>
  useAppSelector((state) => state.walletReducer.adaHandles);

export const useRefreshAdaHandles = () => {
  const dispatch = useAppDispatch();
  const { wallet } = useWallet();
  const { baseWalletApi: api } = useCardano();

  return useCallback(() => {
    const refresh = async () => {
      const result = await api.getAdaHandles(wallet);
      dispatch(updateAdaHandles(result));
    };

    if (wallet && api) refresh();
    else dispatch(updateAdaHandles(undefined));
  }, [dispatch, wallet, api]);
};
