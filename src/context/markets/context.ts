import { createContext } from 'react';

import { IMarketsContext } from '@/context/markets/types';

const marketsContext = createContext<IMarketsContext | undefined>(undefined);

export default marketsContext;
