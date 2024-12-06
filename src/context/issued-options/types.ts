import { ReactNode } from 'react';
import { ISSUED_OPTIONS_FILTERS } from '@/constants/filters';
import { IToken } from '@/types/token';

export interface IProvider {
  children: ReactNode;
}

export type TFilters = {
  [ISSUED_OPTIONS_FILTERS.tokenName]: string;
  [ISSUED_OPTIONS_FILTERS.startDate]?: Date | undefined;
  [ISSUED_OPTIONS_FILTERS.endDate]?: Date | undefined;
};

export type TApplyFilters = (filters?: TFilters) => void;

export interface IIssuedOptionsContext {
  filters: TFilters;
  filteredData: IToken[];
  applyFilters?: TApplyFilters;
}
