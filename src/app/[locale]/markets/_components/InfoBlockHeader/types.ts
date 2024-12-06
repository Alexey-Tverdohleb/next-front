import { ReactNode } from 'react';
import { IToken } from '@/types/token';

export interface IInfoBlockHeader {
  className?: string;
}

export interface IInfoBlock {
  children: ReactNode;
  className?: string;
}

export interface IItemsList {
  data: IToken[];
}
