import { FC } from 'react';

import FilterDropdown from '@/components/FilterDropdown';
import { IDropdown } from '@/app/[locale]/my-options/_tabs/HistoryTab/types';
import useToggle from '@/hooks/useToggle/useToggle';
import DropdownContent from '@/app/[locale]/my-options/_tabs/HistoryTab/Filters/Desktop/DateDropdown/DropdownContent';
import useOptionsHistory from '@/context/options-history/useOptionsHistory';
import { getFormattedDateString } from '@/helpers/dateRange';
import { OPTIONS_HISTORY_FILTERS } from '@/constants/filters';

const DateDropdown: FC<IDropdown> = () => {
  const [isOpen, toggleOpen] = useToggle({ initial: false });

  const { filters } = useOptionsHistory();

  const currentValue = getFormattedDateString(
    filters[OPTIONS_HISTORY_FILTERS.startDate],
    filters[OPTIONS_HISTORY_FILTERS.endDate]
  );

  return (
    <FilterDropdown
      currentValue={currentValue}
      isOpen={isOpen}
      toggleOpen={toggleOpen}
      label="Date:"
      className="mr-md"
    >
      <DropdownContent toggleOpen={toggleOpen} />
    </FilterDropdown>
  );
};

export default DateDropdown;
