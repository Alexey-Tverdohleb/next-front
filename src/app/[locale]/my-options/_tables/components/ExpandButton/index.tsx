import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IProps } from '@/app/[locale]/my-options/_tables/components/ExpandButton/types';
import DownIcon from '@/assets/icons/DownIcon';
import UpIcon from '@/assets/icons/UpIcon';

const ExpandButton: FC<IProps> = ({ className, row, table }) => {
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
