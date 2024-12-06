import { IMyOptionsContext } from '@/context/my-options/types';
import { MY_OPTIONS_FILTERS } from '@/constants/filters';

export const DEFAULT_DATE = undefined;

export const DEFAULT_VALUE: IMyOptionsContext = {
  filters: {
    [MY_OPTIONS_FILTERS.tokenName]: '',
    [MY_OPTIONS_FILTERS.startDate]: DEFAULT_DATE,
    [MY_OPTIONS_FILTERS.endDate]: DEFAULT_DATE,
  },
  filteredData: [],
};
