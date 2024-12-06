import { ReactNode } from 'react';
import { MY_OPTIONS_FILTERS } from '@/constants/filters';
import { IToken } from '@/types/token';

export interface IProvider {
  children: ReactNode;
}

export type TFilters = {
  [MY_OPTIONS_FILTERS.tokenName]: string;
  [MY_OPTIONS_FILTERS.startDate]?: Date | undefined;
  [MY_OPTIONS_FILTERS.endDate]?: Date | undefined;
};

export type TApplyFilters = (filters?: TFilters) => void;

export interface IMyOptionsContext {
  filters: TFilters;
  filteredData: IToken[];
  applyFilters?: TApplyFilters;
}
