import { FC, useCallback, useState } from 'react';
import { Range, RangeKeyDict } from 'react-date-range';

import { INITIAL_RANGE } from '@/app/[locale]/my-options/_tabs/OptionsTab/MyOptionsFilters/constants';
import { IDropdownContent } from '@/app/[locale]/my-options/_tabs/OptionsTab/types';
import DateRangePicker from '@/components/DateRangePicker';
import FilterControlBar from '@/components/FilterControlBar';
import useIssuedOptions from '@/context/issued-options/useIssuedOptions';
import { ISSUED_OPTIONS_FILTERS } from '@/constants/filters';
import { DEFAULT_DATE } from '@/context/issued-options/defaultValue';

const DropdownContent: FC<IDropdownContent> = ({ toggleOpen }) => {
  const { filters, applyFilters } = useIssuedOptions();

  const [ranges, setRanges] = useState<Range[]>([
    {
      ...INITIAL_RANGE,
      startDate: filters[ISSUED_OPTIONS_FILTERS.startDate] ?? new Date(),
      endDate: filters[ISSUED_OPTIONS_FILTERS.endDate] ?? new Date(),
    },
  ]);

  const handleSelection = useCallback(
    ({ selection }: RangeKeyDict) => setRanges([selection]),
    [setRanges]
  );

  const handleApply = () => {
    applyFilters?.({
      ...filters,
      [ISSUED_OPTIONS_FILTERS.startDate]: ranges[0].startDate,
      [ISSUED_OPTIONS_FILTERS.endDate]: ranges[0].endDate,
    });
    toggleOpen();
  };

  const handleCancel = () => {
    applyFilters?.({
      ...filters,
      [ISSUED_OPTIONS_FILTERS.startDate]: DEFAULT_DATE,
      [ISSUED_OPTIONS_FILTERS.endDate]: DEFAULT_DATE,
    });
    toggleOpen();
  };

  return (
    <>
      <DateRangePicker ranges={ranges} handleSelection={handleSelection} />
      <FilterControlBar handleApply={handleApply} handleCancel={handleCancel} />
    </>
  );
};

export default DropdownContent;
