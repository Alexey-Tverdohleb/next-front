import { useMemo, useState, FC } from 'react';

import CalendarBody from '@/components/DateInput/CalendarButton/CalendarBody';
import Button from '@/components/Button';
import { getMonthDateRange } from '@/components/DateInput/helpers';
import usePages from '@/hooks/usePages';
import { IContent } from '@/components/DateInput/types';
import SheetControl from '@/components/DateInput/CalendarButton/SheetPopup/SheetControl';

const SheetContent: FC<IContent> = ({ onSelect, value }) => {
  const RANGE_SIZE = 12;
  const PER_PAGE = 6;

  const dates = useMemo(() => getMonthDateRange(RANGE_SIZE), [RANGE_SIZE]);

  const [selectedDate, setSelectedDate] = useState<string>(value);

  const { page, isPrevDisabled, isNextDisabled, toPrevPage, toNextPage } = usePages(
    dates,
    PER_PAGE
  );

  return (
    <>
      <SheetControl
        isNextDisabled={isNextDisabled}
        isPrevDisabled={isPrevDisabled}
        toNextPage={toNextPage}
        toPrevPage={toPrevPage}
      />
      <CalendarBody page={page} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <Button label="Confirm" onClick={() => onSelect(selectedDate)} className="mb-xl" />
    </>
  );
};

export default SheetContent;
