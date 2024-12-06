import { FC, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import { IProps } from '@/app/[locale]/markets/_components/BasesDropdown/types';
import FilterDropdown from '@/components/FilterDropdown';
import useToggle from '@/hooks/useToggle/useToggle';
import DropdownContent from '@/app/[locale]/markets/_components/BasesDropdown/DropdownContent';
import useMarkets from '@/context/markets/useMarkets';
import { MARKETS_FILTERS } from '@/constants/filters';
import { truncateText } from '@/helpers/common';

const BasesDropdown: FC<IProps> = ({ label, className }) => {
  const [isOpen, toggleOpen] = useToggle({ initial: false });

  const { filters, data, applyFilters } = useMarkets();

  const currentValue = useMemo(
    () =>
      data.find(
        (item) => item.info.symbol.toLowerCase() === filters[MARKETS_FILTERS.base].toLowerCase()
      ),
    [filters, data]
  );

  const onClear = () => applyFilters?.({ ...filters, [MARKETS_FILTERS.base]: '' });

  return (
    <FilterDropdown
      currentValue={truncateText(currentValue?.info.symbol, 15)}
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

export default BasesDropdown;
