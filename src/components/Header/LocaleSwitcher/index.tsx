import { FC, useState, useRef } from 'react';
import { usePathname, useRouter } from 'next-intl/client';
import { twMerge } from 'tailwind-merge';
import { useClickAway } from 'react-use';

import { TLocaleOption } from '@/components/Header/LocaleSwitcher/types';
import { IProps } from '@/components/Header/LocaleSwitcher/types';
import useToggle from '@/hooks/useToggle/useToggle';
import { DEFAULT_LOCALE, LOCALE_OPTIONS } from '@/components/Header/LocaleSwitcher/options';

const LocaleSwitcher: FC<IProps> = ({ className }) => {
  const [isOpen, toggleOpen] = useToggle({ initial: false });
  const ref = useRef(null);

  const router = useRouter();
  const pathname = usePathname();

  const handleClose = () => {
    if (!isOpen) return;

    toggleOpen();
  };

  useClickAway(ref, handleClose);

  const [locale, setLocale] = useState<TLocaleOption>(DEFAULT_LOCALE);

  const handleSwitch = (item: TLocaleOption) => {
    setLocale(item);
    router.replace(pathname, { locale: item.value });
    toggleOpen();
  };

  return (
    <div className={twMerge('relative', className)} ref={ref}>
      <div
        onClick={toggleOpen}
        role="button"
        className={twMerge('p-md shrink-0', 'cursor-pointer', 'flex items-center')}
      >
        <div className="mr-sm w-[20px] h-[20px] flex items-center justify-center">
          {locale.icon}
        </div>
        <div className="font-[500] text-primary dark:text-white w-[34px] select-none">
          {locale.label}
        </div>
      </div>

      {isOpen && (
        <div
          className={twMerge(
            'text-left',
            'mt-[2px] p-md rounded-[8px]',
            'bg-white dark:bg-dark-200',
            'text-primary dark:text-dark-white',
            'drop-shadow-lg',
            'absolute z-50 min-w-full',
            'desktop:top-full desktop:bottom-auto top-auto bottom-full',
            'desktop:right-0 desktop:left-auto right-auto left-0'
          )}
        >
          {LOCALE_OPTIONS.map((item) => (
            <div
              onClick={() => handleSwitch(item)}
              role="button"
              key={item.value}
              className={twMerge(
                'flex items-center',
                'p-sm rounded-[4px]',
                'hover:bg-secondary-blue dark:hover:bg-dark-gray',
                'dark:bg-dark-200',
                'cursor-pointer'
              )}
            >
              <div className="mr-sm w-[20px] h-[20px] flex items-center justify-center">
                {item.icon}
              </div>
              <div className="w-[34px]">{item.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocaleSwitcher;
