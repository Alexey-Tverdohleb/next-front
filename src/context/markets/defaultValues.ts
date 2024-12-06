import { IMarketsContext } from '@/context/markets/types';
import { MARKETS_FILTERS } from '@/constants/filters';

export const DEFAULT_VALUES: IMarketsContext = {
  data: [],
  filteredData: [],
  categoriesMap: {},
  filters: {
    [MARKETS_FILTERS.tokenName]: '',
    [MARKETS_FILTERS.tokenVerified]: true,
    [MARKETS_FILTERS.base]: '',
    [MARKETS_FILTERS.classification]: '',
  },
};
