import { ReactNode } from 'react';
import { Header } from '@tanstack/react-table';

import { IToken } from '@/types/token';

export interface IProps {
  children: ReactNode;
  header: Header<IToken, unknown>;
}
