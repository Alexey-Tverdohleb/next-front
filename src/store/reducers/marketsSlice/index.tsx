import { createSlice } from '@reduxjs/toolkit';
import { IToken } from '@/types/token';

type MarketsState = {
  detailData: IToken | null;
};

const initialState: MarketsState = {
  detailData: null,
};

export const marketsSlice = createSlice({
  name: 'markets',
  initialState,
  reducers: {
    setMarketData(state, { payload }) {
      return {
        ...state,
        detailData: payload,
      };
    },
  },
});

export const marketsReducer = marketsSlice.reducer;
