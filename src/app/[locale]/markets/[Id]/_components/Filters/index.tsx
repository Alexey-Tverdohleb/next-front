'use client';

import { FC } from 'react';

import { IProps } from '@/app/[locale]/markets/[Id]/_components/Filters/types';
import useScreen from '@/hooks/useScreen';
import Desktop from '@/app/[locale]/markets/[Id]/_components/Filters/Desktop';
import Mobile from '@/app/[locale]/markets/[Id]/_components/Filters/Mobile';

const Filters: FC<IProps> = () => {
  const { isDesktop } = useScreen();

  return isDesktop ? <Desktop /> : <Mobile />;
};

export default Filters;
