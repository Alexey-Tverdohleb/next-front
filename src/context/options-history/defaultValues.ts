import { OPTIONS_HISTORY_FILTERS } from '@/constants/filters';
import { IOptionsHistoryContext } from '@/context/options-history/types';

export const DEFAULT_DATE = undefined;

export const DEFAULT_VALUE: IOptionsHistoryContext = {
  filters: {
    [OPTIONS_HISTORY_FILTERS.tokenName]: '',
    [OPTIONS_HISTORY_FILTERS.optionType]: '',
    [OPTIONS_HISTORY_FILTERS.startDate]: DEFAULT_DATE,
    [OPTIONS_HISTORY_FILTERS.endDate]: DEFAULT_DATE,
  },
  filteredData: [],
};
