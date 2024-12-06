import { Range } from 'react-date-range';

import { TOption } from '@/types/common';

export const INITIAL_RANGE: Range = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
};

export const INITIAL_TYPE = 'call';

export const TYPE_OPTIONS: TOption[] = [
  {
    label: 'Call',
    value: 'call',
  },
  {
    label: 'Put',
    value: 'put',
  },
];
