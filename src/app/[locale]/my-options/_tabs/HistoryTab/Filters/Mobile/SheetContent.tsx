import { FC, useCallback, useState } from 'react';
import { Range, RangeKeyDict } from 'react-date-range';

import {
  INITIAL_RANGE,
  TYPE_OPTIONS,
} from '@/app/[locale]/my-options/_tabs/HistoryTab/Filters/constants';

import { ISheetContent } from '@/app/[locale]/my-options/_tabs/HistoryTab/types';
import DateRangePicker from '@/components/DateRangePicker';
import Button from '@/components/Button';
import FiltersDivider from '@/app/[locale]/my-options/_components/FiltersDivider';
import MobileSelect from '@/components/MobileSelect';
import useOptionsHistory from '@/context/options-history/useOptionsHistory';
import { OPTIONS_HISTORY_FILTERS } from '@/constants/filters';

const SheetContent: FC<ISheetContent> = ({ toggleOpen }) => {
  const { filters, applyFilters } = useOptionsHistory();

  const [ranges, setRanges] = useState<Range[]>([
    {
      ...INITIAL_RANGE,
      startDate: filters[OPTIONS_HISTORY_FILTERS.startDate] ?? new Date(),
      endDate: filters[OPTIONS_HISTORY_FILTERS.endDate] ?? new Date(),
    },
  ]);

  const [type, setType] = useState<string>(filters[OPTIONS_HISTORY_FILTERS.optionType]);

  const handleSelection = useCallback(
    ({ selection }: RangeKeyDict) => setRanges([selection]),
    [setRanges]
  );

  const handleApply = () => {
    applyFilters?.({
      ...filters,
      [OPTIONS_HISTORY_FILTERS.optionType]: type,
      [OPTIONS_HISTORY_FILTERS.startDate]: ranges[0].startDate,
      [OPTIONS_HISTORY_FILTERS.endDate]: ranges[0].endDate,
    });
    toggleOpen?.();
  };

  return (
    <div>
      <div className="text-xl font-[600] mb-md">Filters</div>
      <div className="text-xs font-[600] mb-sm">Date:</div>
      <DateRangePicker ranges={ranges} handleSelection={handleSelection} className="mb-md" />
      <FiltersDivider />
      <div className="text-xs font-[600] mb-sm">Type:</div>
      <MobileSelect className="mb-xl" options={TYPE_OPTIONS} value={type} setValue={setType} />
      <Button label="Apply" onClick={handleApply} />
    </div>
  );
};

export default SheetContent;
