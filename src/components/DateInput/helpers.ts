import dayjs from 'dayjs';

export const getMonthDateRange = (rangeSize: number) => {
  const range = [];

  for (let i = 1; i <= rangeSize; i++) {
    // Create a new Date object for the current date
    const currentDate = new Date();

    // Get the month and year of the current date
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Calculate the month and year of the next month
    let nextMonth = currentMonth + i;
    let nextYear = currentYear;

    if (nextMonth > 11) {
      // If the next month is greater than 11 (December), add 1 to the year and take 12 from current month
      nextMonth -= 12;
      nextYear += 1;
    }

    // Create a new Date object for the first day of the next month
    range.push(new Date(nextYear, nextMonth, 1));
  }

  return range;
};

export const chunkArray = <T>(arr: T[], n: number): Array<T[]> => {
  const chunkLength = Math.max(arr.length / n, 1);
  const chunks = [];
  for (let i = 0; i < n; i++) {
    if (chunkLength * (i + 1) <= arr.length)
      chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
  }
  return chunks;
};

export const formatDate = (date: Date | null) => {
  if (date === null) return '';

  return dayjs(date).format('DD MMM YYYY');
};
