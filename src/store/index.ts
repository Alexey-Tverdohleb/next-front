import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { tokenApi } from '@/api/tokenApi';
import { walletReducer } from '@/store/reducers/walletSlice';
import { marketsReducer } from '@/store/reducers/marketsSlice';
import { openOrderTableReducer } from '@/store/reducers/openOrderTableSlice';

const rootReducer = combineReducers({
  walletReducer,
  marketsReducer,
  openOrderTableReducer,
  [tokenApi.reducerPath]: tokenApi.reducer,
});

export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tokenApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore['dispatch'];
