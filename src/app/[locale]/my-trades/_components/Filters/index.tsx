import { FC } from 'react';

import { IFilters } from '@/app/[locale]/my-trades/_components/Filters/types';
import useScreen from '@/hooks/useScreen';
import DesktopFilters from '@/app/[locale]/my-trades/_components/Filters/DesktopFilters';
import MobileFilters from '@/app/[locale]/my-trades/_components/Filters/MobileFilters';

const Filters: FC<IFilters> = () => {
  const { isDesktop } = useScreen();

  return isDesktop ? <DesktopFilters /> : <MobileFilters />;
};

export default Filters;
