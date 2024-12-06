import { FC, useCallback, useState } from 'react';

import { IDropdownContent } from '@/app/[locale]/my-options/_tabs/HistoryTab/types';
import DateRangePicker from '@/components/DateRangePicker';
import FilterControlBar from '@/components/FilterControlBar';
import { Range, RangeKeyDict } from 'react-date-range';
import { INITIAL_RANGE } from '@/app/[locale]/my-options/_tabs/HistoryTab/Filters/constants';
import useOptionsHistory from '@/context/options-history/useOptionsHistory';
import { OPTIONS_HISTORY_FILTERS } from '@/constants/filters';
import { DEFAULT_DATE } from '@/context/options-history/defaultValues';

const DropdownContent: FC<IDropdownContent> = ({ toggleOpen }) => {
  const { filters, applyFilters } = useOptionsHistory();

  const [ranges, setRanges] = useState<Range[]>([
    {
      ...INITIAL_RANGE,
      startDate: filters[OPTIONS_HISTORY_FILTERS.startDate] ?? new Date(),
      endDate: filters[OPTIONS_HISTORY_FILTERS.endDate] ?? new Date(),
    },
  ]);

  const handleSelection = useCallback(
    ({ selection }: RangeKeyDict) => setRanges([selection]),
    [setRanges]
  );

  const handleApply = () => {
    applyFilters?.({
      ...filters,
      [OPTIONS_HISTORY_FILTERS.startDate]: ranges[0].startDate,
      [OPTIONS_HISTORY_FILTERS.endDate]: ranges[0].endDate,
    });
    toggleOpen?.();
  };

  const handleCancel = () => {
    applyFilters?.({
      ...filters,
      [OPTIONS_HISTORY_FILTERS.startDate]: DEFAULT_DATE,
      [OPTIONS_HISTORY_FILTERS.endDate]: DEFAULT_DATE,
    });
    toggleOpen?.();
  };

  return (
    <>
      <DateRangePicker ranges={ranges} handleSelection={handleSelection} />
      <FilterControlBar handleApply={handleApply} handleCancel={handleCancel} />
    </>
  );
};

export default DropdownContent;
