import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { twMerge } from 'tailwind-merge';

import { IProps } from '@/components/Pagination/types';
import ChevronLeftIcon from '@/assets/icons/ChevronLeftIcon';
import ChevronRightIcon from '@/assets/icons/ChevronRightIcon';
import EllipsisIcon from '@/assets/icons/EllipsisIcon';

const Pagination: FC<IProps> = ({ pageCount, goToPage }) => {
  return (
    <div className="w-full flex items-center justify-center desktop:mt-xl mt-md">
      <ReactPaginate
        pageCount={pageCount}
        containerClassName="flex items-center"
        pageClassName={twMerge(
          'mr-sm p-sm',
          'border-[1px] border-gray-divider dark:border-dark-200 rounded-[4px]',
          'w-[32px] h-[32px]',
          'flex items-center justify-center',
          'text-sm font-[500] text-primary dark:text-dark-white',
          'hover:bg-blue-300 hover:text-white dark:hover:bg-dark-gray dark:hover:text-dark-white'
        )}
        nextClassName={twMerge(
          'mr-sm p-sm',
          'border-[1px] border-gray-divider dark:border-dark-200 rounded-[4px]',
          'w-[32px] h-[32px]',
          'flex items-center justify-center',
          'text-sm font-[500] text-blue-500 dark:text-dark-white',
          'hover:bg-blue-300 hover:text-white dark:hover:bg-dark-gray dark:hover:text-dark-white'
        )}
        previousClassName={twMerge(
          'mr-sm p-sm',
          'border-[1px] border-gray-divider dark:border-dark-200 rounded-[4px]',
          'w-[32px] h-[32px]',
          'flex items-center justify-center',
          'text-sm font-[500] text-blue-500 dark:text-dark-white',
          'hover:bg-blue-300 hover:text-white dark:hover:bg-dark-gray dark:hover:text-dark-white'
        )}
        breakClassName={twMerge(
          'mr-sm p-sm',
          'border-[1px] border-gray-divider dark:border-dark-200 rounded-[4px]',
          'w-[32px] h-[32px]',
          'flex items-center justify-center',
          'text-sm font-[500] text-gray-secondary dark:text-dark-200',
          'hover:bg-blue-300 hover:text-white dark:hover:bg-dark-gray dark:hover:text-dark-white'
        )}
        activeClassName={twMerge(
          'bg-blue-500 text-white dark:border-blue-500 border-blue-500',
          'hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-dark-white'
        )}
        disabledClassName="hover:bg-white dark:hover:bg-dark-400 cursor-default"
        disabledLinkClassName="text-gray-divider dark:text-dark-200 cursor-default"
        previousLabel={<ChevronLeftIcon />}
        nextLabel={<ChevronRightIcon />}
        breakLabel={<EllipsisIcon />}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={({ selected }) => goToPage(selected)}
        disableInitialCallback
      />
    </div>
  );
};

export default Pagination;
