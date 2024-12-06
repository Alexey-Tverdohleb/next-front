import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IDateDropdown } from '@/app/[locale]/markets/[Id]/_components/DateDropdown/types';
import { MARKET_DETAILS_FILTERS } from '@/constants/filters';
import useToggle from '@/hooks/useToggle/useToggle';
import FilterDropdown from '@/components/FilterDropdown';
import useMarketDetails from '@/context/market-details/useMarketDetails';
import { getFormattedDateString } from '@/helpers/dateRange';
import DropdownContent from '@/app/[locale]/markets/[Id]/_components/DateDropdown/DropdownContent';

const DateDropdown: FC<IDateDropdown> = ({ className, label }) => {
  const [isOpen, toggleOpen] = useToggle({ initial: false });

  const { filters } = useMarketDetails();

  const currentValue = getFormattedDateString(
    filters[MARKET_DETAILS_FILTERS.expStartDate],
    filters[MARKET_DETAILS_FILTERS.expEndDate]
  );

  return (
    <FilterDropdown
      currentValue={currentValue}
      toggleOpen={toggleOpen}
      isOpen={isOpen}
      label={label}
      className={twMerge(className)}
    >
      <DropdownContent toggleOpen={toggleOpen} />
    </FilterDropdown>
  );
};

export default DateDropdown;
