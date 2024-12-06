import { IMyTradesContext } from '@/context/my-trades/types';
import { MY_TRADES_FILTERS } from '@/constants/filters';

export const DEFAULT_DATE = undefined;

export const DEFAULT_VALUE: IMyTradesContext = {
  filters: {
    [MY_TRADES_FILTERS.tokenName]: '',
    [MY_TRADES_FILTERS.status]: '',
    [MY_TRADES_FILTERS.startDate]: DEFAULT_DATE,
    [MY_TRADES_FILTERS.endDate]: DEFAULT_DATE,
  },
  filteredData: [],
};
