import { PropsWithChildren, useRef } from 'react';
import Image from 'next/image';
import { useClickAway } from 'react-use';
import { twMerge } from 'tailwind-merge';
import UpIcon from '@/assets/icons/UpIcon';
import DownIcon from '@/assets/icons/DownIcon';

export default function Dropdown({
  children,
  isOpen,
  toggleOpen,
  value,
}: PropsWithChildren<{
  isOpen: boolean;
  value: { label: string; value: string | number; icon?: string };
  toggleOpen(): void;
}>) {
  const ref = useRef(null);

  const handleClose = () => {
    if (!isOpen) return;

    toggleOpen();
  };

  useClickAway(ref, handleClose);

  return (
    <div ref={ref} className={twMerge('relative w-full')}>
      <button
        type="button"
        onClick={toggleOpen}
        className={twMerge(
          'text-primary dark:text-dark-white',
          'cursor-pointer',
          isOpen ? 'bg-white dark:bg-dark-gray' : 'bg-white dark:bg-dark-300',
          'rounded-[8px] border-[1px] dark:border-0',
          isOpen ? 'border-blue-500' : 'border-gray-divider',
          'h-[45px] px-md py-sm',
          'flex w-full items-center gap-x-2.5'
        )}
      >
        {value && (
          <div
            className={twMerge(
              'text-md font-medium text-primary dark:text-dark-white',
              'mr-[10px] px-sm py-xxs',
              'rounded-[4px]',
              'whitespace-nowrap',
              'flex w-full gap-x-2'
            )}
          >
            {value.icon && <Image src={value.icon} width={24} height={24} alt="coin image" />}
            <p>{value.label}</p>
          </div>
        )}
        <div className="text-gray-secondary dark:text-dark-gray">
          {isOpen ? <UpIcon className="text-blue-500 dark:text-dark-white" /> : <DownIcon />}
        </div>
      </button>
      {isOpen && (
        <div
          className={twMerge(
            'absolute right-0 z-50 min-w-full',
            'drop-shadow-lg',
            'text-left text-primary dark:text-dark-white',
            'bg-white dark:bg-dark-200',
            'mt-xxs rounded-[8px] p-md'
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
