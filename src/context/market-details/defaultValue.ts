import { MARKET_DETAILS_FILTERS } from '@/constants/filters';
import { IMarketDetailsContext } from '@/context/market-details/types';

export const DEFAULT_DATE = undefined;

export const DEFAULT_VALUE: IMarketDetailsContext = {
  filters: {
    [MARKET_DETAILS_FILTERS.expStartDate]: DEFAULT_DATE,
    [MARKET_DETAILS_FILTERS.expEndDate]: DEFAULT_DATE,
    [MARKET_DETAILS_FILTERS.strikePriceFrom]: '',
    [MARKET_DETAILS_FILTERS.strikePriceTo]: '',
    [MARKET_DETAILS_FILTERS.volumeFrom]: '',
    [MARKET_DETAILS_FILTERS.volumeTo]: '',
  },
  filteredData: [],
  data: [],
};
