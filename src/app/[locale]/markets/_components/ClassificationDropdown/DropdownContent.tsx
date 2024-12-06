import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IContent } from '@/app/[locale]/markets/_components/ClassificationDropdown/types';
import { CLASS_OPTIONS } from '@/app/[locale]/markets/constant';
import { MARKETS_FILTERS } from '@/constants/filters';
import useMarkets from '@/context/markets/useMarkets';

const DropdownContent: FC<IContent> = ({ toggleOpen }) => {
  const { filters, applyFilters } = useMarkets();

  const handleSelect = (value: string) => {
    applyFilters?.({ ...filters, [MARKETS_FILTERS.classification]: value });
    toggleOpen();
  };

  return (
    <div>
      {CLASS_OPTIONS.map(({ label, value }) => (
        <button
          onClick={() => handleSelect(value.toString())}
          className={twMerge(
            'p-sm w-full rounded-[4px]',
            'text-left text-md text-primary font-[500] dark:text-dark-white',
            'hover:bg-secondary-blue dark:hover:bg-dark-gray'
          )}
          type="button"
          key={value}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default DropdownContent;
