import { FC, useCallback, useState } from 'react';
import { Range, RangeKeyDict } from 'react-date-range';

import { IContent } from '@/app/[locale]/markets/[Id]/_components/DateDropdown/types';
import useMarketDetails from '@/context/market-details/useMarketDetails';
import { DEFAULT_DATE } from '@/context/market-details/defaultValue';
import { MARKET_DETAILS_FILTERS } from '@/constants/filters';
import DateRangePicker from '@/components/DateRangePicker';
import FilterControlBar from '@/components/FilterControlBar';

const DropdownContent: FC<IContent> = ({ toggleOpen }) => {
  const { filters, applyFilters } = useMarketDetails();

  const [ranges, setRanges] = useState<Range[]>([
    {
      key: 'selection',
      startDate: filters[MARKET_DETAILS_FILTERS.expStartDate] ?? new Date(),
      endDate: filters[MARKET_DETAILS_FILTERS.expEndDate] ?? new Date(),
    },
  ]);

  const handleSelection = useCallback(
    ({ selection }: RangeKeyDict) => setRanges([selection]),
    [setRanges]
  );

  const handleApply = () => {
    applyFilters?.({
      ...filters,
      [MARKET_DETAILS_FILTERS.expStartDate]: ranges[0].startDate,
      [MARKET_DETAILS_FILTERS.expEndDate]: ranges[0].endDate,
    });
    toggleOpen?.();
  };

  const handleCancel = () => {
    applyFilters?.({
      ...filters,
      [MARKET_DETAILS_FILTERS.expStartDate]: DEFAULT_DATE,
      [MARKET_DETAILS_FILTERS.expEndDate]: DEFAULT_DATE,
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
