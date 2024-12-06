import { FC, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { useClickAway } from 'react-use';

import { IProps } from '@/components/FilterDropdown/types';
import UpIcon from '@/assets/icons/UpIcon';
import DownIcon from '@/assets/icons/DownIcon';
import CrossIcon from '@/assets/icons/CrossIcon';

const FilterDropdown: FC<IProps> = ({
  className,
  label = '--',
  children,
  isOpen,
  toggleOpen,
  popupClassName,
  currentValue,
  onClear,
}) => {
  const ref = useRef(null);

  const handleClose = () => {
    if (!isOpen) return;

    toggleOpen();
  };

  useClickAway(ref, handleClose);

  return (
    <div ref={ref} className={twMerge('relative', className)}>
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
          'flex items-center'
        )}
      >
        <div className="mr-[10px]">{label}</div>
        {currentValue && (
          <div
            className={twMerge(
              'text-xs font-[700] text-primary dark:text-dark-white',
              'bg-secondary-blue dark:bg-dark-200',
              'mr-[10px] px-sm py-xxs',
              'rounded-[4px]',
              'whitespace-nowrap'
            )}
          >
            <div className="flex items-center">
              <div>{currentValue}</div>
              {onClear && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onClear?.();
                  }}
                  className="ml-[10px] text-gray-secondary dark:text-dark-white"
                >
                  <CrossIcon />
                </button>
              )}
            </div>
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
            'mt-xxs rounded-[8px] p-md',
            popupClassName
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
