import { FC } from 'react';

import { IFilters } from '@/app/[locale]/my-options/_tabs/OptionsTab/types';
import BottomSheet from '@/components/BottomSheet';
import useToggle from '@/hooks/useToggle/useToggle';
import FilterButton from '@/components/FilterButton';
import SheetContent from '@/app/[locale]/my-options/_tabs/OptionsTab/IssuedOptionsFilters/Mobile/SheetContent';

const MobileFilters: FC<IFilters> = () => {
  const [isOpen, toggleOpen] = useToggle({ initial: false });

  return (
    <>
      <FilterButton onClick={toggleOpen} />
      <BottomSheet isOpen={isOpen} handleClose={toggleOpen}>
        <SheetContent toggleOpen={toggleOpen} />
      </BottomSheet>
    </>
  );
};

export default MobileFilters;
