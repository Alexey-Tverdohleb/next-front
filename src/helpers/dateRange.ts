import { format } from 'date-fns';

export const formatDate = (date: Date | undefined): string => {
  if (!date) return '--';

  return format(date, 'dd MMM, yyyy');
};

export const getFormattedDateString = (start: Date | undefined, end: Date | undefined) => {
  if (!start || !end) return;

  return `${formatDate(start)} - ${formatDate(end)}`;
};
