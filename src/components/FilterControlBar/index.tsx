import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IProps } from '@/components/FilterControlBar/types';

const FilterControlBar: FC<IProps> = ({ handleApply, handleCancel }) => {
  return (
    <div className="flex items-center justify-end mt-md">
      <button
        className={twMerge(
          'mr-md px-md py-sm',
          'bg-blue-500',
          'rounded-[4px]',
          'text-md font-[600] text-white'
        )}
        type="button"
        onClick={handleApply}
      >
        Apply
      </button>
      <button
        className={twMerge(
          'px-md py-sm',
          'bg-secondary-blue dark:bg-dark-300',
          'rounded-[4px]',
          'text-md font-[600] text-blue-500 dark:text-dark-white'
        )}
        onClick={handleCancel}
        type="button"
      >
        Cancel
      </button>
    </div>
  );
};

export default FilterControlBar;
