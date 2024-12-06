import { useState } from 'react';

import { chunkArray } from '@/components/DateInput/helpers';

const usePages = <T>(data: T[], perPage: number) => {
  const chunks = data.length / perPage;
  const pages = chunkArray(data, chunks);

  const [pageIndex, setPageIndex] = useState(0);

  const isPrevDisabled = pageIndex === 0;

  const isNextDisabled = pageIndex >= pages.length - 1;

  const toNextPage = () => {
    if (isNextDisabled) return;

    setPageIndex((prevState) => prevState + 1);
  };

  const toPrevPage = () => {
    if (isPrevDisabled) return;

    setPageIndex((prevState) => prevState - 1);
  };

  return {
    page: pages[pageIndex],
    isNextDisabled,
    isPrevDisabled,
    toNextPage,
    toPrevPage,
  };
};

export default usePages;
