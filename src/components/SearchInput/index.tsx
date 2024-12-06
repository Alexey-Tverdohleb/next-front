import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import SearchIcon from '@/assets/icons/SearchIcon';
import { IProps } from '@/components/SearchInput/types';

const SearchInput: FC<IProps> = ({ value, placeholder, className, onChange }) => {
  return (
    <div
      className={twMerge(
        'bg-secondary-blue dark:bg-dark-gray flex items-center justify-between w-full',
        'h-[50px] rounded-[100px] px-xmd',
        className
      )}
    >
      <div className="mr-md">
        <SearchIcon className="text-gray-secondary dark:text-dark-white" />
      </div>
      <input
        type="search"
        name="search"
        defaultValue={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className={twMerge(
          'w-full h-full mr-md py-md',
          'text-primary dark:text-dark-white text-sm focus:outline-none',
          'bg-secondary-blue dark:bg-dark-gray',
          'placeholder-gray-secondary dark:placeholder-dark-white'
        )}
      />
    </div>
  );
};

export default SearchInput;
