import { JSX, useState, useMemo, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';
import { useIntersection } from 'react-use';

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getPaginationRowModel,
  SortingState,
} from '@tanstack/react-table';

import { IProps } from '@/components/Table/types';
import Pagination from '@/components/Pagination';
import SwipeIcon from '@/assets/icons/SwipeIcon';

const Table = <T,>({
  data = [],
  columns,
  ExpandElement,
  paginated,
  showSwipeTip,
  onClick,
}: IProps<T>): JSX.Element => {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const [sorting, setSorting] = useState<SortingState>([]);

  const t = useTranslations('Common');

  const intersectRef = useRef(null);

  const intersect = useIntersection(intersectRef, {
    threshold: 1,
  });

  const handleExpand = ({ currentTarget }: MouseEvent) => {
    if (!(currentTarget instanceof HTMLButtonElement)) return;

    const { row } = currentTarget.dataset;

    if (!row) return;

    const rowId = expandedRow === row ? null : row;

    setExpandedRow(rowId);
  };

  const paginationRowModel = useMemo(
    () => (paginated ? getPaginationRowModel() : undefined),
    [paginated]
  );

  const tableInstance = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: paginationRowModel,
    meta: {
      handleExpand,
      expandedRow,
    },
  });

  if (!data.length)
    return (
      <div
        className={twMerge(
          'flex w-full items-center justify-center',
          'text-sm font-[500] text-primary dark:text-dark-white',
          'my-xl'
        )}
      >
        {t('noData')}
      </div>
    );

  return (
    <>
      <div className="max-w-screen w-full overflow-x-auto">
        <div className="flex w-max min-w-full items-center">
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <div key={headerGroup.id} className={twMerge('flex w-max min-w-full items-center')}>
              {headerGroup.headers.map((header) => {
                const isSticky = header.column.columnDef.meta?.sticky;

                return (
                  <div key={header.id} className="relative flex grow">
                    {isSticky && (
                      <div ref={intersectRef} className="absolute bottom-0 top-0 w-[1px]" />
                    )}
                    <div
                      className={twMerge(
                        'flex grow last-of-type:justify-end',
                        'bg-white dark:bg-dark-400',
                        isSticky ? 'sticky left-0' : 'static'
                      )}
                    >
                      <div
                        style={{ width: header.column.getSize() }}
                        className={twMerge(
                          'flex items-center px-sm py-sm desktop:px-md',
                          'text-xs font-[500] text-gray-secondary dark:text-dark-gray desktop:text-sm'
                        )}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div>
          {tableInstance.getRowModel().rows.map((row) => {
            const isExpanded = row.id === expandedRow;

            const hover = onClick
              ? 'cursor-pointer hover:bg-secondary-blue dark:hover:bg-dark-300'
              : null;

            const background = isExpanded
              ? 'bg-secondary-blue dark:bg-dark-500'
              : 'bg-white dark:bg-dark-400';

            return (
              <div key={row.id} onClick={() => onClick?.(row)}>
                <div className={twMerge('flex w-max min-w-full items-center', background, hover)}>
                  {row.getVisibleCells().map((cell) => {
                    const isSticky = cell.column.columnDef.meta?.sticky;

                    const position = isSticky ? 'sticky left-0' : 'static';

                    const background = isSticky ? 'bg-white dark:bg-dark-400' : null;

                    return (
                      <div
                        key={cell.id}
                        className={twMerge(
                          'flex grow last-of-type:justify-end',
                          position,
                          background,
                          isSticky && intersect && !intersect.isIntersecting
                            ? 'shadow-[0_40px_50px_-10px_rgba(0,0,0,0.75)]'
                            : ''
                        )}
                      >
                        <div
                          style={{ width: cell.column.getSize() }}
                          className={twMerge(
                            'flex items-center justify-start',
                            'p-sm desktop:p-md desktop:text-md',
                            'text-sm font-[500] text-primary dark:text-dark-white'
                          )}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {ExpandElement && isExpanded && <ExpandElement row={row} />}
              </div>
            );
          })}
        </div>
      </div>

      {showSwipeTip && (
        <div className="my-md flex w-full items-center justify-center text-gray-secondary dark:text-dark-gray">
          <SwipeIcon className="mr-sm" />
          <div className="text-sm font-[500]">{t('swipeTip')}</div>
        </div>
      )}

      {paginated && (
        <Pagination
          pageCount={tableInstance?.getPageCount()}
          goToPage={tableInstance?.setPageIndex}
        />
      )}
    </>
  );
};

export default Table;
