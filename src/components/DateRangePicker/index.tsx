import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { DateRange } from 'react-date-range';

import { IProps } from '@/components/DateRangePicker/types';
import RangeFooter from '@/components/DateRangePicker/RangeFooter';
import useScreen from '@/hooks/useScreen';

const DateRangePicker: FC<IProps> = ({ className, ranges, handleSelection }) => {
  const { isDesktop } = useScreen();

  return (
    <div
      className={twMerge(
        'flex flex-col items-center justify-center',
        isDesktop && 'desktop',
        className
      )}
    >
      <DateRange
        className="bg-white desktop:dark:bg-dark-200 dark:bg-dark-400"
        color="#275FCC"
        rangeColors={['#275FCC']}
        moveRangeOnFirstSelection={false}
        ranges={ranges}
        onChange={handleSelection}
        fixedHeight
      />
      <RangeFooter ranges={ranges} />
    </div>
  );
};

export default DateRangePicker;
