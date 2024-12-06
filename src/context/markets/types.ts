import { ReactNode } from 'react';

import { ICategory, IToken } from '@/types/token';
import { MARKETS_FILTERS } from '@/constants/filters';

export interface IProvider {
  children: ReactNode;
}

export type TFilters = {
  [MARKETS_FILTERS.tokenName]: string;
  [MARKETS_FILTERS.tokenVerified]: boolean;
  [MARKETS_FILTERS.base]: string;
  [MARKETS_FILTERS.classification]: string;
};

export type TFiltersApply = (filters?: TFilters) => void;

export interface IMarketsContext {
  data: IToken[];
  filteredData: IToken[];
  categoriesMap: ICategory;
  filters: TFilters;
  applyFilters?: TFiltersApply;
}
