import { FC, useMemo } from 'react';

import { IProps } from '@/app/[locale]/markets/_components/ClassificationDropdown/types';
import useToggle from '@/hooks/useToggle/useToggle';
import FilterDropdown from '@/components/FilterDropdown';
import { twMerge } from 'tailwind-merge';
import DropdownContent from '@/app/[locale]/markets/_components/ClassificationDropdown/DropdownContent';
import useMarkets from '@/context/markets/useMarkets';
import { CLASS_OPTIONS } from '@/app/[locale]/markets/constant';
import { MARKETS_FILTERS } from '@/constants/filters';

const ClassificationDropdown: FC<IProps> = ({ label, className }) => {
  const [isOpen, toggleOpen] = useToggle({ initial: false });

  const { filters, applyFilters } = useMarkets();

  const currentValue = useMemo(
    () => CLASS_OPTIONS.find((option) => option.value === filters[MARKETS_FILTERS.classification]),
    [filters]
  );

  const onClear = () => applyFilters?.({ ...filters, [MARKETS_FILTERS.classification]: '' });

  return (
    <FilterDropdown
      currentValue={currentValue?.label}
      toggleOpen={toggleOpen}
      isOpen={isOpen}
      label={label}
      className={twMerge(className)}
      onClear={onClear}
    >
      <DropdownContent toggleOpen={toggleOpen} />
    </FilterDropdown>
  );
};

export default ClassificationDropdown;
