import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IRangeFooter } from '@/components/DateRangePicker/types';
import { formatDate } from '@/helpers/dateRange';

const RangeFooter: FC<IRangeFooter> = ({ ranges }) => {
  const [range] = ranges;

  const startDate = formatDate(range.startDate);

  const endDate = formatDate(range.endDate);

  return (
    <div
      className={twMerge(
        'w-full py-sm mt-sm',
        'flex items-center justify-center',
        'bg-gray-bg dark:bg-dark-300',
        'text-sm font-[500]'
      )}
    >
      <div className="flex items-center">
        <div className="font-[700]">From:</div>&nbsp;
        <div className="w-[90px] whitespace-nowrap text-right">{startDate}</div>
      </div>
      <div className="mx-xl">-</div>
      <div className="flex items-center">
        <div className="font-[700]">To:</div>&nbsp;
        <div className="w-[90px] whitespace-nowrap text-right">{endDate}</div>
      </div>
    </div>
  );
};

export default RangeFooter;
