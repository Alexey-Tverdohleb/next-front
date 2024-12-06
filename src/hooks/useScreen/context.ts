import { createContext } from 'react';

import { IContext } from '@/hooks/useScreen/types';

const screenContext = createContext<IContext | undefined>(undefined);

export default screenContext;
