import { FC } from 'react';

import { IDropdown } from '@/app/[locale]/my-options/_tabs/OptionsTab/types';
import FilterDropdown from '@/components/FilterDropdown';
import useToggle from '@/hooks/useToggle/useToggle';
import DropdownContent from '@/app/[locale]/my-options/_tabs/OptionsTab/MyOptionsFilters/Desktop/DateDropdown/DropdownContent';
import useMyOptions from '@/context/my-options/useMyOptions';
import { getFormattedDateString } from '@/helpers/dateRange';
import { MY_OPTIONS_FILTERS } from '@/constants/filters';

const DateDropdown: FC<IDropdown> = () => {
  const [isOpen, toggleOpen] = useToggle({ initial: false });

  const { filters } = useMyOptions();

  const currentValue = getFormattedDateString(
    filters[MY_OPTIONS_FILTERS.startDate],
    filters[MY_OPTIONS_FILTERS.endDate]
  );

  return (
    <FilterDropdown
      currentValue={currentValue}
      isOpen={isOpen}
      toggleOpen={toggleOpen}
      label="Expire date:"
    >
      <DropdownContent toggleOpen={toggleOpen} />
    </FilterDropdown>
  );
};

export default DateDropdown;
