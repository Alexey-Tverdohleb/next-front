import { FC } from 'react';

import { IProps } from '@/components/FilterButton/types';
import { twMerge } from 'tailwind-merge';
import FiltersIcon from '@/assets/icons/FiltersIcon';

const FilterButton: FC<IProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        'text-gray-secondary dark:text-dark-gray',
        'cursor-pointer',
        'dark:bg-dark-300',
        'border-[1px] dark:border-0 border-gray-divider rounded-[8px]',
        'px-md py-sm'
      )}
    >
      <FiltersIcon />
    </button>
  );
};

export default FilterButton;
