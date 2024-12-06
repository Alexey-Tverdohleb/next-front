import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IProps } from '@/app/[locale]/minting/_components/Toggle/types';
import { getFlexClass } from '@/components/Toggle/helpers';

const Toggle: FC<IProps> = ({ label, labelPosition = 'left', className, onToggle, value }) => {
  return (
    <div className={twMerge(className, getFlexClass(labelPosition), 'shrink-0')}>
      <div
        onClick={() => onToggle?.(!value)}
        className="text-md font-[500] text-primary dark:text-dark-white cursor-pointer"
      >
        {label}
      </div>
      <button
        type="button"
        className={twMerge(
          'w-[44px] h-[24px] rounded-[1000px] flex items-center cursor-pointer mr-md',
          value ? ' bg-primary-blue' : 'bg-dark-gray'
        )}
        onClick={() => onToggle?.(!value)}
      >
        <div
          className={twMerge(
            'bg-white h-[20px] w-[20px] rounded-full transition-transform',
            value ? 'translate-x-[22px]' : 'translate-x-[3px]'
          )}
        />
      </button>
    </div>
  );
};

export default Toggle;
