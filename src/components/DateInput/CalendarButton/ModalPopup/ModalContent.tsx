import { useMemo, FC } from 'react';

import CalendarBody from '@/components/DateInput/CalendarButton/CalendarBody';
import { getMonthDateRange } from '@/components/DateInput/helpers';
import usePages from '@/hooks/usePages';
import { IContent } from '@/components/DateInput/types';
import ModalControl from '@/components/DateInput/CalendarButton/ModalPopup/ModalControl';

const ModalContent: FC<IContent> = ({ onSelect, value }) => {
  const RANGE_SIZE = 12;
  const PER_PAGE = 6;

  const dates = useMemo(() => getMonthDateRange(RANGE_SIZE), [RANGE_SIZE]);

  const { page, isPrevDisabled, isNextDisabled, toPrevPage, toNextPage } = usePages(
    dates,
    PER_PAGE
  );

  return (
    <>
      <CalendarBody page={page} selectedDate={value} setSelectedDate={onSelect} />
      <ModalControl
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
        toPrevPage={toPrevPage}
        toNextPage={toNextPage}
      />
    </>
  );
};

export default ModalContent;
