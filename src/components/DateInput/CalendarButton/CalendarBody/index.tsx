import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { formatDate } from '@/components/DateInput/helpers';
import { IBody } from '@/components/DateInput/types';

const CalendarBody: FC<IBody> = ({ page, selectedDate, setSelectedDate }) => {
  return (
    <div className="pb-md grid grid-cols-2 w-full">
      {page.map((value: Date) => (
        <div
          key={value.toDateString()}
          onClick={() => setSelectedDate(formatDate(value))}
          className={twMerge(
            'text-sm font-[500] text-primary dark:text-dark-white text-center',
            'p-sm mb-sm rounded-[4px]',
            'hover:bg-secondary-blue dark:hover:bg-dark-gray',
            selectedDate === formatDate(value)
              ? 'bg-secondary-blue dark:bg-dark-gray'
              : 'bg-transparent'
          )}
        >
          {formatDate(value)}
        </div>
      ))}
    </div>
  );
};

export default CalendarBody;
