import { createContext } from 'react';

import { IMarketDetailsContext } from '@/context/market-details/types';

const marketDetailsContext = createContext<IMarketDetailsContext | undefined>(undefined);

export default marketDetailsContext;
