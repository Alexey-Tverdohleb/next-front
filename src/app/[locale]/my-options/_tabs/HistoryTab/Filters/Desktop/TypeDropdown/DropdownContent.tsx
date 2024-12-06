import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IDropdownContent } from '@/app/[locale]/my-options/_tabs/HistoryTab/types';
import { TYPE_OPTIONS } from '@/app/[locale]/my-options/_tabs/HistoryTab/Filters/constants';
import useOptionsHistory from '@/context/options-history/useOptionsHistory';
import { OPTIONS_HISTORY_FILTERS } from '@/constants/filters';

const DropdownContent: FC<IDropdownContent> = ({ toggleOpen }) => {
  const { filters, applyFilters } = useOptionsHistory();

  const handleSelect = (value: string | number) => {
    applyFilters?.({ ...filters, [OPTIONS_HISTORY_FILTERS.optionType]: value.toString() });
    toggleOpen?.();
  };

  return (
    <div>
      {TYPE_OPTIONS.map(({ label, value }) => (
        <button
          onClick={() => handleSelect(value)}
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
