import { FC, useCallback } from 'react';

import { IFiltersProps } from '@/app/[locale]/my-options/_tabs/HistoryTab/types';
import useToggle from '@/hooks/useToggle/useToggle';
import FilterButton from '@/components/FilterButton';
import BottomSheet from '@/components/BottomSheet';
import SearchButton from '@/components/SearchButton';
import SheetContent from '@/app/[locale]/my-options/_tabs/HistoryTab/Filters/Mobile/SheetContent';
import useOptionsHistory from '@/context/options-history/useOptionsHistory';
import { OPTIONS_HISTORY_FILTERS } from '@/constants/filters';

const MobileFilters: FC<IFiltersProps> = () => {
  const [isOpen, toggleOpen] = useToggle({ initial: false });
  const [isSearch, toggleSearch] = useToggle({ initial: false });

  const { filters, applyFilters } = useOptionsHistory();

  const handleSearch = useCallback(
    (value: string) => applyFilters?.({ ...filters, [OPTIONS_HISTORY_FILTERS.tokenName]: value }),
    [filters, applyFilters]
  );

  return (
    <>
      <div className="flex item-center justify-between">
        <SearchButton
          defaultValue={filters[OPTIONS_HISTORY_FILTERS.tokenName]}
          handleSearch={handleSearch}
          isExpanded={isSearch}
          toggleOpen={toggleSearch}
        />
        {!isSearch && <FilterButton onClick={toggleOpen} />}
      </div>
      <BottomSheet isOpen={isOpen} handleClose={toggleOpen}>
        <SheetContent toggleOpen={toggleOpen} />
      </BottomSheet>
    </>
  );
};

export default MobileFilters;
