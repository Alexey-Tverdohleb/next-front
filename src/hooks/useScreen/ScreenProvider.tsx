'use client';

import { FC, useEffect, useState } from 'react';

import screenContext from '@/hooks/useScreen/context';
import { IProps } from '@/hooks/useScreen/types';
import { useMedia } from 'react-use';

const ScreenProvider: FC<IProps> = ({ children }) => {
  const ProviderElement = screenContext.Provider;

  const isWide = useMedia('(min-width: 1145px)');

  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => setIsDesktop(isWide), [isWide]);

  return <ProviderElement value={{ isDesktop }}>{children}</ProviderElement>;
};

export default ScreenProvider;
