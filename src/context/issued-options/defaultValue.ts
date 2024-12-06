import { IIssuedOptionsContext } from '@/context/issued-options/types';
import { ISSUED_OPTIONS_FILTERS } from '@/constants/filters';

export const DEFAULT_DATE = undefined;

export const DEFAULT_VALUE: IIssuedOptionsContext = {
  filters: {
    [ISSUED_OPTIONS_FILTERS.tokenName]: '',
    [ISSUED_OPTIONS_FILTERS.startDate]: DEFAULT_DATE,
    [ISSUED_OPTIONS_FILTERS.endDate]: DEFAULT_DATE,
  },
  filteredData: [],
};
