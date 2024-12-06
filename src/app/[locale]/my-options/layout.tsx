import { PropsWithChildren } from 'react';

import OptionsHistoryProvider from '@/context/options-history';
import MyOptionsProvider from '@/context/my-options';
import IssuedOptionsProvider from '@/context/issued-options';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <MyOptionsProvider>
      <IssuedOptionsProvider>
        <OptionsHistoryProvider>{children}</OptionsHistoryProvider>
      </IssuedOptionsProvider>
    </MyOptionsProvider>
  );
};

export default Layout;
