import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { IFilters } from '@/app/[locale]/my-trades/_components/Filters/types';
import { MY_TRADES_FILTERS } from '@/constants/filters';
import SearchInput from '@/components/SearchInput';
import StatusFilter from '@/app/[locale]/my-trades/_components/Filters/StutusFilter';
import DateFilter from '@/app/[locale]/my-trades/_components/Filters/DateFilter';
import useMyTrades from '@/context/my-trades/useMyTrades';

const DesktopFilters: FC<IFilters> = () => {
  const t = useTranslations('MyTradesPage');

  const { filters, applyFilters } = useMyTrades();

  const handleApply = (search: string) =>
    applyFilters?.({ ...filters, [MY_TRADES_FILTERS.tokenName]: search });

  return (
    <div className="flex items-center justify-between mb-xl">
      <h1 className="text-xl font-[600] text-primary dark:text-dark-white">{t('title')}</h1>
      <div className="flex items-center">
        <SearchInput
          value={filters[MY_TRADES_FILTERS.tokenName]}
          placeholder={t('search')}
          className="mr-md"
          onChange={handleApply}
        />
        <DateFilter className="mr-md" />
        <StatusFilter />
      </div>
    </div>
  );
};

export default DesktopFilters;
