import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { IFiltersProps } from '@/app/[locale]/my-options/_tabs/HistoryTab/types';
import SearchInput from '@/components/SearchInput';
import DateDropdown from '@/app/[locale]/my-options/_tabs/HistoryTab/Filters/Desktop/DateDropdown';
import TypeDropdown from '@/app/[locale]/my-options/_tabs/HistoryTab/Filters/Desktop/TypeDropdown';
import useOptionsHistory from '@/context/options-history/useOptionsHistory';
import { OPTIONS_HISTORY_FILTERS } from '@/constants/filters';

const DesktopFilters: FC<IFiltersProps> = () => {
  const t = useTranslations('MyOptionsPage.optionsHistoryTab');

  const { filters, applyFilters } = useOptionsHistory();

  const handleSearch = (search: string) =>
    applyFilters?.({ ...filters, [OPTIONS_HISTORY_FILTERS.tokenName]: search });

  return (
    <div className="flex items-center justify-between mb-xl">
      <SearchInput
        value={filters[OPTIONS_HISTORY_FILTERS.tokenName]}
        onChange={handleSearch}
        placeholder={t('searchInput')}
        className="w-[248px]"
      />
      <div className="flex items-center">
        <DateDropdown />
        <TypeDropdown />
      </div>
    </div>
  );
};

export default DesktopFilters;
