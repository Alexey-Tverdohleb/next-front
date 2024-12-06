import { FC, useCallback, useState } from 'react';
import { Range, RangeKeyDict } from 'react-date-range';

import { IFilters } from '@/app/[locale]/my-trades/_components/Filters/types';
import DateRangePicker from '@/components/DateRangePicker';
import FilterControlBar from '@/components/FilterControlBar';
import useMyTrades from '@/context/my-trades/useMyTrades';
import { MY_TRADES_FILTERS } from '@/constants/filters';
import { DEFAULT_DATE } from '@/context/my-trades/defaultValue';

const DropdownContent: FC<IFilters> = ({ toggleOpen }) => {
  const { filters, applyFilters } = useMyTrades();

  const [ranges, setRanges] = useState<Range[]>([
    {
      key: 'selection',
      startDate: filters[MY_TRADES_FILTERS.startDate] ?? new Date(),
      endDate: filters[MY_TRADES_FILTERS.endDate] ?? new Date(),
    },
  ]);

  const handleSelection = useCallback(
    ({ selection }: RangeKeyDict) => setRanges([selection]),
    [setRanges]
  );

  const handleApply = () => {
    applyFilters?.({
      ...filters,
      [MY_TRADES_FILTERS.startDate]: ranges[0].startDate,
      [MY_TRADES_FILTERS.endDate]: ranges[0].endDate,
    });
    toggleOpen?.();
  };

  const handleCancel = () => {
    applyFilters?.({
      ...filters,
      [MY_TRADES_FILTERS.startDate]: DEFAULT_DATE,
      [MY_TRADES_FILTERS.endDate]: DEFAULT_DATE,
    });
    toggleOpen?.();
  };

  return (
    <>
      <>
        <DateRangePicker ranges={ranges} handleSelection={handleSelection} />
        <FilterControlBar handleApply={handleApply} handleCancel={handleCancel} />
      </>
    </>
  );
};

export default DropdownContent;
