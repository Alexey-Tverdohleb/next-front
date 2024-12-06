import { twMerge } from 'tailwind-merge';

import ToggleMode from '@/components/ToggleMode';
import DesktopNav from '@/components/Header/Navigation/DesktopNav';
import Logo from '@/components/Header/Logo';
import LocaleSwitcher from '@/components/Header/LocaleSwitcher';
import History from '@/components/Header/History';
import WalletConnect from '../WalletConnect';

const Desktop = () => {
  return (
    <header
      className={twMerge(
        'flex shrink-0',
        'bg-white dark:bg-dark-300',
        'h-[70px] w-full',
        'fixed top-0 z-[1000]'
      )}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-xxl">
        <Logo />
        <DesktopNav />
        <div className="flex items-center">
          <History className="mx-xl" />
          <LocaleSwitcher />
          <ToggleMode className="mx-md" />
          <WalletConnect />
        </div>
      </div>
    </header>
  );
};

export default Desktop;
