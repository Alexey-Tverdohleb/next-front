import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import { IFilters } from '@/app/[locale]/my-trades/_components/Filters/types';
import useToggle from '@/hooks/useToggle/useToggle';
import FilterDropdown from '@/components/FilterDropdown';
import DropdownContent from '@/app/[locale]/my-trades/_components/Filters/StutusFilter/DropdownContent';
import useMyTrades from '@/context/my-trades/useMyTrades';
import { MY_TRADES_FILTERS } from '@/constants/filters';

const StatusFilter: FC<IFilters> = ({ className }) => {
  const t = useTranslations('MyTradesPage');
  const [isOpen, toggleOpen] = useToggle({ initial: false });

  const { filters, applyFilters } = useMyTrades();

  const onClear = () => applyFilters?.({ ...filters, [MY_TRADES_FILTERS.status]: '' });

  return (
    <FilterDropdown
      currentValue={filters[MY_TRADES_FILTERS.status]}
      className={twMerge(className)}
      isOpen={isOpen}
      toggleOpen={toggleOpen}
      label={t('statusFilter')}
      onClear={onClear}
    >
      <DropdownContent toggleOpen={toggleOpen} />
    </FilterDropdown>
  );
};

export default StatusFilter;
