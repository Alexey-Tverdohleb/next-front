'use client';

import { FC } from 'react';
import { Provider } from 'react-redux';

import { IProps } from '@/store/types';
import { setUpStore } from '@/store';

const StoreProvider: FC<IProps> = ({ children }) => {
  const store = setUpStore();

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
