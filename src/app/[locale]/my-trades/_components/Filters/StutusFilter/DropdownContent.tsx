import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IFilters } from '@/app/[locale]/my-trades/_components/Filters/types';
import { MY_TRADES_FILTERS } from '@/constants/filters';
import { STATUS_OPTIONS } from '@/app/[locale]/my-trades/_components/Filters/constants';
import useMyTrades from '@/context/my-trades/useMyTrades';

const DropdownContent: FC<IFilters> = ({ toggleOpen }) => {
  const { filters, applyFilters } = useMyTrades();

  const handleSelect = (value: string) => {
    applyFilters?.({ ...filters, [MY_TRADES_FILTERS.status]: value });
    toggleOpen?.();
  };

  return (
    <div>
      {STATUS_OPTIONS.map(({ label, value }) => (
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
