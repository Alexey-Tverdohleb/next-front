import { FC, useCallback, useState } from 'react';
import { Range, RangeKeyDict } from 'react-date-range';

import { IProps } from '@/app/[locale]/my-trades/_components/Filters/MobileSheet/types';
import DateRangePicker from '@/components/DateRangePicker';
import Button from '@/components/Button';
import useMyTrades from '@/context/my-trades/useMyTrades';
import { MY_TRADES_FILTERS } from '@/constants/filters';
import { STATUS_OPTIONS } from '@/app/[locale]/my-trades/_components/Filters/constants';
import FiltersDivider from '@/app/[locale]/my-options/_components/FiltersDivider';
import MobileSelect from '@/components/MobileSelect';

const MobileSheet: FC<IProps> = ({ toggleOpen }) => {
  const { filters, applyFilters } = useMyTrades();

  const [ranges, setRanges] = useState<Range[]>([
    {
      key: 'selection',
      startDate: filters[MY_TRADES_FILTERS.startDate] ?? new Date(),
      endDate: filters[MY_TRADES_FILTERS.endDate] ?? new Date(),
    },
  ]);

  const [status, setStatus] = useState<string>(filters[MY_TRADES_FILTERS.status]);

  const handleSelectionRange = useCallback(
    ({ selection }: RangeKeyDict) => setRanges([selection]),
    [setRanges]
  );

  const handleApplyRange = () => {
    applyFilters?.({
      ...filters,
      [MY_TRADES_FILTERS.startDate]: ranges[0].startDate,
      [MY_TRADES_FILTERS.endDate]: ranges[0].endDate,
      [MY_TRADES_FILTERS.status]: status,
    });
    toggleOpen?.();
  };

  return (
    <div>
      <div className="text-xl font-[600] mb-md">Filters</div>
      <div className="text-xs font-[600] mb-sm">Date:</div>
      <DateRangePicker ranges={ranges} handleSelection={handleSelectionRange} className="mb-md" />
      <FiltersDivider />
      <div className="text-xs font-[600] mb-sm">Classification:</div>
      <MobileSelect
        className="mb-xl"
        options={STATUS_OPTIONS}
        value={status}
        setValue={setStatus}
      />
      <Button label="Apply" onClick={handleApplyRange} />
    </div>
  );
};

export default MobileSheet;
