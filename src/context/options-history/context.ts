import { createContext } from 'react';

import { IOptionsHistoryContext } from '@/context/options-history/types';

const optionsHistoryContext = createContext<IOptionsHistoryContext | undefined>(undefined);

export default optionsHistoryContext;
