import { createContext } from 'react';

import { IMyOptionsContext } from '@/context/my-options/types';

const myOptionsContext = createContext<IMyOptionsContext | undefined>(undefined);

export default myOptionsContext;
