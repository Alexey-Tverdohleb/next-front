import { createSlice } from '@reduxjs/toolkit';

import initialState from './initialState';

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: initialState,
  reducers: {
    resetWalletState: () => ({
      ...initialState,
    }),
    updateAddress: (state, { payload }) => ({
      ...state,
      address: payload,
    }),
    updateBalances: (state, { payload }) => ({
      ...state,
      balances: payload,
    }),
    updateAdaHandles: (state, { payload }) => ({
      ...state,
      adaHandles: payload,
    }),
  },
});

export const walletReducer = walletSlice.reducer;
