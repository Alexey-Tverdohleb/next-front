import { ReactNode } from 'react';

import { OPTIONS_HISTORY_FILTERS } from '@/constants/filters';
import { IToken } from '@/types/token';

export interface IProvider {
  children: ReactNode;
}

export type TFilters = {
  [OPTIONS_HISTORY_FILTERS.tokenName]: string;
  [OPTIONS_HISTORY_FILTERS.startDate]?: Date | undefined;
  [OPTIONS_HISTORY_FILTERS.endDate]?: Date | undefined;
  [OPTIONS_HISTORY_FILTERS.optionType]: string;
};

export type TApplyFilters = (filters?: TFilters) => void;

export interface IOptionsHistoryContext {
  filters: TFilters;
  filteredData: IToken[];
  applyFilters?: TApplyFilters;
}
