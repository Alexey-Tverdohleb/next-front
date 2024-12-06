import { FC } from 'react';

import { IFiltersProps } from '@/app/[locale]/my-options/_tabs/HistoryTab/types';
import DesktopFilters from '@/app/[locale]/my-options/_tabs/HistoryTab/Filters/Desktop';
import MobileFilters from '@/app/[locale]/my-options/_tabs/HistoryTab/Filters/Mobile';
import useScreen from '@/hooks/useScreen';

const Filters: FC<IFiltersProps> = () => {
  const { isDesktop } = useScreen();

  const FilterElement = isDesktop ? DesktopFilters : MobileFilters;

  return (
    <div className="mb-xl">
      <FilterElement />
    </div>
  );
};

export default Filters;
