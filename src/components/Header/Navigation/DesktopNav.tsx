import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import links from '@/components/Header/Navigation/links';

const DesktopNav = () => {
  const t = useTranslations('Navigation');

  const pathname = usePathname();
  const isActive = (href: string) => href === pathname;

  return (
    <nav className="flex h-full">
      {links.map(({ value, href }) => (
        <Link
          key={value}
          href={href}
          className={twMerge(
            'ml-xl h-full flex items-center text-lg',
            isActive(href)
              ? 'text-primary-blue dark:text-white font-bold border-b-2 border-primary-blue'
              : 'text-gray-secondary dark:text-dark-white'
          )}
        >
          {t(value)}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNav;
