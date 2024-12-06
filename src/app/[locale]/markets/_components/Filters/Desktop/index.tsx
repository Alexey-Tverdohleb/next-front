import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';

import { MARKETS_FILTERS } from '@/constants/filters';
import ExpandSearch from '@/app/[locale]/markets/_components/ExpandSearch';
import useToggle from '@/hooks/useToggle/useToggle';
import ToggleFilter from '@/components/ToggleFilter';
import BasesDropdown from '@/app/[locale]/markets/_components/BasesDropdown';
import ClassificationDropdown from '@/app/[locale]/markets/_components/ClassificationDropdown';
import useMarkets from '@/context/markets/useMarkets';

const Desktop = () => {
  const [isSearch, toggleSearch] = useToggle({ initial: false });

  const { applyFilters, filters } = useMarkets();

  const handleSearch = (value: string) => {
    applyFilters?.({ ...filters, [MARKETS_FILTERS.tokenName]: value });
  };

  const handleToggle = (value: boolean) => {
    applyFilters?.({ ...filters, [MARKETS_FILTERS.tokenVerified]: value });
  };

  const t = useTranslations('MarketsPage.filters');

  return (
    <div
      className={twMerge(
        'desktop:mb-xl mb-md',
        'flex items-center justify-between',
        'w-full h-[45px]'
      )}
    >
      <ExpandSearch
        isExpanded={isSearch}
        toggleOpen={toggleSearch}
        handleSearch={handleSearch}
        placeholder={t('search')}
      />

      {!isSearch && (
        <div className="flex items-center">
          <ToggleFilter
            value={filters[MARKETS_FILTERS.tokenVerified]}
            onToggle={handleToggle}
            label={t('verifiedToggle')}
            className="mr-md"
          />
          <BasesDropdown label="Bases:" className="mr-md" />
          <ClassificationDropdown label="Classification:" />
        </div>
      )}
    </div>
  );
};

export default Desktop;
