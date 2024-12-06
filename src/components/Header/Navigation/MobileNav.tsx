import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import links from '@/components/Header/Navigation/links';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
  const t = useTranslations('Navigation');

  const pathname = usePathname();
  const isActive = (href: string) => href === pathname;

  return (
    <nav className="flex flex-col justify-between items-center mt-xl">
      {links.map(({ value, href }) => (
        <Link
          key={value}
          href={href}
          className={twMerge(
            'mb-sm px-sm py-md w-full text-center rounded-[8px] text-lg',
            isActive(href)
              ? 'dark:text-primary font-[500] bg-secondary-blue dark:bg-dark-300 dark:text-white'
              : 'text-primary font-[400] dark:text-dark-gray'
          )}
        >
          {t(value)}
        </Link>
      ))}
    </nav>
  );
};

export default MobileNav;
