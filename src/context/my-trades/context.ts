import { createContext } from 'react';

import { IMyTradesContext } from '@/context/my-trades/types';

const myTradesContext = createContext<IMyTradesContext | undefined>(undefined);

export default myTradesContext;
