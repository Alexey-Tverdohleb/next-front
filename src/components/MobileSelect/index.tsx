import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import CheckIcon from '@/assets/icons/CheckIcon';
import { IMobileSelect } from '@/components/MobileSelect/types';

const MobileSelect: FC<IMobileSelect> = ({ className, value, setValue, options }) => {
  const isActive = (option: string | number) => option === value;
  return (
    <div className={twMerge(className, 'text-xs font-[600] text-white dark:text-dark-white')}>
      {options.map(({ label, value }) => (
        <div
          key={value}
          role="button"
          onClick={() => setValue(value.toString())}
          className={twMerge(
            'flex item-center justify-between p-sm pr-md rounded-[4px]',
            isActive(value) && 'bg-secondary-blue dark:bg-dark-500'
          )}
        >
          <div className={twMerge('px-md py-xs rounded-[4px] bg-blue dark:bg-dark-200')}>
            {label}
          </div>

          {isActive(value) && <CheckIcon className="text-primary-blue dark:text-dark-white" />}
        </div>
      ))}
    </div>
  );
};

export default MobileSelect;
