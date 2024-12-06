import { FC, useRef } from 'react';
import { useClickAway } from 'react-use';
import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';

import { IProps } from '@/components/SearchButton/types';
import SearchIcon from '@/assets/icons/SearchIcon';

const SearchButton: FC<IProps> = ({
  toggleOpen,
  className,
  isExpanded,
  handleSearch,
  defaultValue = '',
}) => {
  const ref = useRef(null);

  const t = useTranslations('MyOptionsPage.optionsHistoryTab');

  const handleClose = () => {
    if (!isExpanded) return;

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
      <div onClick={toggleOpen}>
        <SearchIcon />
      </div>

      {isExpanded && (
        <input
          defaultValue={defaultValue}
          placeholder={t('searchInput')}
          onBlur={handleClose}
          type="search"
          onChange={(e) => handleSearch(e.target.value)}
          className={twMerge(
            'w-full outline-none ml-md',
            'bg-secondary-blue dark:bg-dark-gray',
            'placeholder:text-gray-secondary dark:placeholder:text-dark-white',
            'text-primary dark:text-dark-white'
          )}
        />
      )}
    </div>
  );
};

export default SearchButton;
