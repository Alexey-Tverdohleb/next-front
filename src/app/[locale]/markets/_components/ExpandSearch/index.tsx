import { FC, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { useClickAway } from 'react-use';

import { IExpandSearch } from '@/app/[locale]/markets/_components/ExpandSearch/types';
import SearchIcon from '@/assets/icons/SearchIcon';

const ExpandSearch: FC<IExpandSearch> = ({
  toggleOpen,
  className,
  isExpanded,
  handleSearch,
  defaultValue = '',
  placeholder,
}) => {
  const ref = useRef(null);

  const handleClose = () => {
    if (!isExpanded) return;

    toggleOpen?.();
  };

  const handleExpand = () => {
    if (isExpanded) return;

    toggleOpen?.();
  };

  useClickAway(ref, handleClose);

  return (
    <div
      ref={ref}
      className={twMerge(
        'p-xmd rounded-full h-[44px]',
        'bg-secondary-blue dark:bg-dark-gray',
        'text-gray-secondary dark:text-dark-white',
        'cursor-pointer',
        'flex items-center',
        isExpanded ? 'w-full' : 'w-fit',
        className
      )}
    >
      <SearchIcon className="shrink-0 w-[16px] h-[16px]" />
      <input
        defaultValue={defaultValue}
        placeholder={placeholder}
        onBlur={handleClose}
        onFocus={handleExpand}
        type="search"
        onChange={(e) => handleSearch(e.target.value)}
        className={twMerge(
          'w-full outline-none ml-md',
          'bg-secondary-blue dark:bg-dark-gray',
          'placeholder:text-gray-secondary dark:placeholder:text-dark-white',
          'text-primary dark:text-dark-white'
        )}
      />
    </div>
  );
};

export default ExpandSearch;
