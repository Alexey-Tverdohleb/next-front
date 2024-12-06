import useAppDispatch from '@/store/hooks/useAppDispatch';
import { marketsSlice } from '@/store/reducers/marketsSlice';
import { useCallback } from 'react';
import { IToken } from '@/types/token';
import useAppSelector from '@/store/hooks/useAppSelector';

const { setMarketData } = marketsSlice.actions;

export const useSetMarketData = () => {
  const dispatch = useAppDispatch();

  return useCallback((data: IToken) => dispatch(setMarketData(data)), [dispatch]);
};

export const useMarketData = () => useAppSelector((state) => state.marketsReducer.detailData);
