'use client';

import Desktop from '@/components/Header/Desktop';
import Mobile from '@/components/Header/Mobile';
import useScreen from '@/hooks/useScreen';

const Header = () => {
  const { isDesktop } = useScreen();

  return isDesktop ? <Desktop /> : <Mobile />;
};

export default Header;
