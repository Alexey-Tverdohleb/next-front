import { FC } from 'react';

import { ILayout } from '@/app/[locale]/markets/[Id]/types';
import MarketDetailsProvider from '@/context/market-details';

const MarketDetailsLayout: FC<ILayout> = ({ children }) => (
  <MarketDetailsProvider>{children}</MarketDetailsProvider>
);

export default MarketDetailsLayout;
