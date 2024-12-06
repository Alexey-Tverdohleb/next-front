import { FC } from 'react';

import FilterDropdown from '@/components/FilterDropdown';
import { IDropdown } from '@/app/[locale]/my-options/_tabs/HistoryTab/types';
import useToggle from '@/hooks/useToggle/useToggle';
import DropdownContent from '@/app/[locale]/my-options/_tabs/HistoryTab/Filters/Desktop/TypeDropdown/DropdownContent';
import useOptionsHistory from '@/context/options-history/useOptionsHistory';
import { OPTIONS_HISTORY_FILTERS } from '@/constants/filters';

const TypeDropdown: FC<IDropdown> = () => {
  const [isOpen, toggleOpen] = useToggle({ initial: false });

  const { filters, applyFilters } = useOptionsHistory();

  const onClear = () => applyFilters?.({ ...filters, [OPTIONS_HISTORY_FILTERS.optionType]: '' });

  return (
    <FilterDropdown
      currentValue={filters[OPTIONS_HISTORY_FILTERS.optionType]}
      isOpen={isOpen}
      toggleOpen={toggleOpen}
      label="Type:"
      onClear={onClear}
    >
      <DropdownContent toggleOpen={toggleOpen} />
    </FilterDropdown>
  );
};

export default TypeDropdown;
