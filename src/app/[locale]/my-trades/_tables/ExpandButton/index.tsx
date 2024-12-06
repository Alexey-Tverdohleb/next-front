import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IProps } from '@/app/[locale]/my-trades/_tables/ExpandButton/types';
import UpIcon from '@/assets/icons/UpIcon';
import DownIcon from '@/assets/icons/DownIcon';

const ExpandButton: FC<IProps> = ({ table, row, className }) => {
  const { handleExpand, expandedRow } = table.options.meta;

  const isExpanded = row.id === expandedRow;

  return (
    <button
      type="button"
      data-row={row.id}
      onClick={handleExpand}
      className={twMerge(
        'flex items-center',
        'py-md pl-xxs h-[54px]',
        'text-gray-secondary dark:text-dark-gray',
        'cursor-pointer',
        className
      )}
    >
      {isExpanded ? <UpIcon className="text-primary-blue" /> : <DownIcon />}
    </button>
  );
};

export default ExpandButton;
