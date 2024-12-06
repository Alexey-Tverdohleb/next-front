import { twMerge } from 'tailwind-merge';

import useToggle from '@/hooks/useToggle/useToggle';
import SearchButton from '@/components/SearchButton';
import { isIOS } from '@/helpers/system';
import FullScreenButton from '@/components/FullScreenButton';
import FilterButton from '@/components/FilterButton';
import BottomSheet from '@/components/BottomSheet';
import SheetContent from '@/app/[locale]/markets/[Id]/_components/Filters/Mobile/SheetContent';

const Mobile = () => {
  const handleSearch = () => {};

  const [isSearch, toggleSearch] = useToggle({ initial: false });
  const [isOpen, toggleOpen] = useToggle({ initial: false });

  return (
    <>
      <div className={twMerge('desktop:mb-xl mb-md', 'flex items-center justify-between')}>
        <SearchButton toggleOpen={toggleSearch} isExpanded={isSearch} handleSearch={handleSearch} />

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
