import { createContext } from 'react';

import { IIssuedOptionsContext } from '@/context/issued-options/types';

const issuedOptionsContext = createContext<IIssuedOptionsContext | undefined>(undefined);

export default issuedOptionsContext;
