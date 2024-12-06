import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';
import { useSwipeable } from 'react-swipeable';

import { IDrawerMenu } from '@/components/Header/types';
import MobileNav from '@/components/Header/Navigation/MobileNav';
import ToggleMode from '@/components/ToggleMode';
import Button from '@/components/Button';
import Logo from '@/components/Header/Logo';
import WalletIcon from '@/assets/icons/WalletIcon';
import LocaleSwitcher from '@/components/Header/LocaleSwitcher';

const DrawerMenu: FC<IDrawerMenu> = ({ open, toggleOpen }) => {
  const t = useTranslations('Menu');

  const handleClose = () => {
    if (!open) return;

    toggleOpen();
  };

  const handlers = useSwipeable({
    onSwipedRight: handleClose,
  });

  return (
    <>
      <div
        onClick={handleClose}
        className={twMerge(
          open ? 'fixed' : 'hidden',
          'bg-primary opacity-[.8] top-0 left-0 right-0 bottom-0'
        )}
      />
      <div
        {...handlers}
        ref={handlers.ref}
        className={twMerge(
          'transition-transform',
          open ? 'translate-x-0' : 'translate-x-[300px]',
          'fixed top-0 bottom-0 right-0 z-50',
          'h-screen w-[277px]',
          'bg-white dark:bg-dark-400 px-xmd py-xxl'
        )}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <Logo className="flex justify-end mb-xl" />
            <MobileNav />
          </div>
          <div className="flex flex-col justify-between">
            <Button className="mb-xl" label={t('connectWallet')} icon={<WalletIcon />} />
            <div className="flex justify-between items-center">
              <LocaleSwitcher />
              <ToggleMode />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawerMenu;
