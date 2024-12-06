'use client';

import { FC } from 'react';

import { IFilters } from '@/app/[locale]/markets/_components/Filters/types';
import useScreen from '@/hooks/useScreen';
import Desktop from '@/app/[locale]/markets/_components/Filters/Desktop';
import Mobile from '@/app/[locale]/markets/_components/Filters/Mobile';

const Filters: FC<IFilters> = () => {
  const { isDesktop } = useScreen();

  return isDesktop ? <Desktop /> : <Mobile />;
};

export default Filters;
