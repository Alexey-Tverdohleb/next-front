import { FC } from 'react';

import { LayoutProps } from '@/app/types';

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return children;
};

// Add cardano namespace to window
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cardano: any;
  }
}

export default RootLayout;
