import { ReactNode } from 'react';

import { IToken } from '@/types/token';
import { MARKET_DETAILS_FILTERS } from '@/constants/filters';

export interface IProvider {
  children: ReactNode;
}

export type TFilters = {
  [MARKET_DETAILS_FILTERS.expStartDate]?: Date | undefined;
  [MARKET_DETAILS_FILTERS.expEndDate]?: Date | undefined;
  [MARKET_DETAILS_FILTERS.strikePriceFrom]: string;
  [MARKET_DETAILS_FILTERS.strikePriceTo]: string;
  [MARKET_DETAILS_FILTERS.volumeFrom]: string;
  [MARKET_DETAILS_FILTERS.volumeTo]: string;
};

export type TFiltersApply = (filters?: TFilters) => void;

export interface IMarketDetailsContext {
  data: IToken[];
  filteredData: IToken[];
  filters: TFilters;
  applyFilters?: TFiltersApply;
}
