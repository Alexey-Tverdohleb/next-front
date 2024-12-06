import React from 'react';
import { twMerge } from 'tailwind-merge';

import { isIOS } from '@/helpers/system';
import { MARKETS_FILTERS } from '@/constants/filters';
import SearchButton from '@/components/SearchButton';
import FilterButton from '@/components/FilterButton';
import BottomSheet from '@/components/BottomSheet';
import useToggle from '@/hooks/useToggle/useToggle';
import FullScreenButton from '@/components/FullScreenButton';
import useMarkets from '@/context/markets/useMarkets';
import SheetContent from '@/app/[locale]/markets/_components/Filters/Mobile/SheetContent';

const Mobile = () => {
  const { filters, applyFilters } = useMarkets();

  const handleSearch = (value: string) => {
    applyFilters?.({ ...filters, [MARKETS_FILTERS.tokenName]: value });
  };

  const [isSearch, toggleSearch] = useToggle({ initial: false });
  const [isOpen, toggleOpen] = useToggle({ initial: false });

  return (
    <>
      <div className={twMerge('desktop:mb-xl mb-md', 'flex items-center justify-between')}>
        <SearchButton
          defaultValue={filters[MARKETS_FILTERS.tokenName]}
          toggleOpen={toggleSearch}
          isExpanded={isSearch}
          handleSearch={handleSearch}
        />

        {!isSearch && (
          <div>
            {!isIOS() && <FullScreenButton className="mr-md" />}
            <FilterButton onClick={toggleOpen} />
          </div>
        )}
      </div>

      <BottomSheet isOpen={isOpen} handleClose={toggleOpen}>
        <SheetContent toggleOpen={toggleOpen} />
      </BottomSheet>
    </>
  );
};

export default Mobile;
