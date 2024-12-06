import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import { IFilters } from '@/app/[locale]/my-trades/_components/Filters/types';
import FilterDropdown from '@/components/FilterDropdown';
import DropdownContent from '@/app/[locale]/my-trades/_components/Filters/DateFilter/DropdownContent';
import useToggle from '@/hooks/useToggle/useToggle';
import useMyTrades from '@/context/my-trades/useMyTrades';
import { getFormattedDateString } from '@/helpers/dateRange';
import { MY_TRADES_FILTERS } from '@/constants/filters';

const DateFilter: FC<IFilters> = ({ className }) => {
  const t = useTranslations('MyTradesPage');

  const [isOpen, toggleOpen] = useToggle({ initial: false });

  const { filters } = useMyTrades();

  const currentValue = getFormattedDateString(
    filters[MY_TRADES_FILTERS.startDate],
    filters[MY_TRADES_FILTERS.endDate]
  );

  return (
    <FilterDropdown
      currentValue={currentValue}
      className={twMerge(className)}
      isOpen={isOpen}
      toggleOpen={toggleOpen}
      label={t('dateFilter')}
    >
      <DropdownContent toggleOpen={toggleOpen} />
    </FilterDropdown>
  );
};

export default DateFilter;
