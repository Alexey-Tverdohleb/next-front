import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { IFilters } from '@/app/[locale]/my-trades/_components/Filters/types';
import { MY_TRADES_FILTERS } from '@/constants/filters';
import SearchButton from '@/components/SearchButton';
import useToggle from '@/hooks/useToggle/useToggle';
import FilterButton from '@/components/FilterButton';
import BottomSheet from '@/components/BottomSheet';
import MobileSheet from '@/app/[locale]/my-trades/_components/Filters/MobileSheet';
import useMyTrades from '@/context/my-trades/useMyTrades';

const MobileFilters: FC<IFilters> = () => {
  const t = useTranslations('MyTradesPage');

  const [isExpanded, toggleExpanded] = useToggle({ initial: false });
  const [isFilters, toggleFilters] = useToggle({ initial: false });

  const { filters, applyFilters } = useMyTrades();

  const handleSearch = (search: string) =>
    applyFilters?.({ ...filters, [MY_TRADES_FILTERS.tokenName]: search });

  return (
    <div className="flex items-center justify-between mb-xl">
      <div className="flex items-center">
        <SearchButton
          isExpanded={isExpanded}
          toggleOpen={toggleExpanded}
          defaultValue={filters[MY_TRADES_FILTERS.tokenName]}
          handleSearch={handleSearch}
          className="mr-md"
        />
        {!isExpanded && (
          <h1 className="text-xl font-[600] text-primary dark:text-dark-white">{t('title')}</h1>
        )}
      </div>
      {!isExpanded && <FilterButton onClick={toggleFilters} />}
      <BottomSheet isOpen={isFilters} handleClose={toggleFilters}>
        <MobileSheet toggleOpen={toggleFilters} />
      </BottomSheet>
    </div>
  );
};

export default MobileFilters;
