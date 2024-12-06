import { ReactNode } from 'react';

import { IToken } from '@/types/token';
import { MY_TRADES_FILTERS } from '@/constants/filters';

export interface IProvider {
  children: ReactNode;
}

export type TFilters = {
  [MY_TRADES_FILTERS.tokenName]: string;
  [MY_TRADES_FILTERS.status]: string;
  [MY_TRADES_FILTERS.startDate]?: Date | undefined;
  [MY_TRADES_FILTERS.endDate]?: Date | undefined;
};

export type TApplyFilters = (filters?: TFilters) => void;

export interface IMyTradesContext {
  filters: TFilters;
  filteredData: IToken[];
  applyFilters?: TApplyFilters;
}
