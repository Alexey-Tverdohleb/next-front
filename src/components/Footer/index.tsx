import { FC } from 'react';
import Link from 'next/link';

import { IProps } from '@/components/Footer/types';
import Logo from '@/components/Header/Logo';

const Footer: FC<IProps> = () => {
  return (
    <footer className="bg-white dark:bg-dark-300">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-xmd py-sm text-sm text-gray-secondary dark:text-dark-white desktop:px-xxl desktop:py-md">
        <div className="flex items-center">
          <Logo className="mr-md hidden desktop:block" />
          <div>&copy; 2023 OptionFlow</div>
        </div>
        <div className="flex flex-col desktop:flex-row">
          <Link className="mr-md" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link href="/service-terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
