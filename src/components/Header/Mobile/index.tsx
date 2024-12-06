import { twMerge } from 'tailwind-merge';

import Logo from '@/components/Header/Logo';
import DrawerButton from '@/components/Header/Mobile/DrawerButton';

const Mobile = () => {
  return (
    <header
      className={twMerge(
        'flex flex-wrap items-center justify-between',
        'bg-white dark:bg-dark-300',
        'h-[60px] w-full shrink-0',
        'px-xmd py-sm',
        'fixed top-0 z-[1000]'
      )}
    >
      <Logo />
      <DrawerButton />
    </header>
  );
};

export default Mobile;
