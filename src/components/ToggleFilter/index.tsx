import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IToggleFilter } from '@/components/ToggleFilter/types';

const ToggleFilter: FC<IToggleFilter> = ({ value, onToggle, label, className }) => {
  return (
    <div className={twMerge('shrink-0', 'flex items-center', className)}>
      <button
        type="button"
        className={twMerge(
          'w-[44px] h-[24px] rounded-[1000px] flex items-center cursor-pointer mr-md',
          value ? ' bg-primary-blue' : 'bg-dark-gray'
        )}
        onClick={() => onToggle(!value)}
      >
        <div
          className={twMerge(
            'bg-white h-[20px] w-[20px] rounded-full transition-transform',
            value ? 'translate-x-[22px]' : 'translate-x-[3px]'
          )}
        />
      </button>
      <div
        onClick={() => onToggle(!value)}
        className="text-md font-[500] text-primary dark:text-dark-white cursor-pointer"
      >
        {label}
      </div>
    </div>
  );
};

export default ToggleFilter;
