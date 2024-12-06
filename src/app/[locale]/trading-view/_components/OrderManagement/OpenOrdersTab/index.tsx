import { Fragment } from 'react';
import { getExpandedRowModel } from '@tanstack/table-core';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { twMerge } from 'tailwind-merge';
import useScreen from '@/hooks/useScreen';
import { columns } from '@/app/[locale]/trading-view/_components/OrderManagement/OpenOrdersTab/columns';
import SubRow from '@/app/[locale]/trading-view/_components/OrderManagement/OpenOrdersTab/SubRow';

const mockData = [
  {
    pair: 'SNEK/ADA',
    date: '15.08.2024',
    type: 'Sell',
    price: 0.61912,
    amount: 0.15619,
    filled: '4/10',
  },
  {
    pair: 'SNEK/ADA',
    date: '15.08.2024',
    type: 'Buy',
    price: 0.61912,
    amount: 0.15619,
    filled: '4/10',
  },
];

export default function OpenOrdersTab() {
  const { isDesktop } = useScreen();
  const table = useReactTable({
    data: mockData,
    columns,
    getRowCanExpand: () => true,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    state: {
      columnVisibility: {
        price: isDesktop,
        amount: isDesktop,
        filled: isDesktop,
        action: isDesktop,
      },
    },
  });

  return (
    <div className="w-full rounded-lg desktop:border desktop:border-gray-divider desktop:p-6 desktop:dark:border-dark-300">
      <table className="w-full table-fixed">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={twMerge(
                    'whitespace-nowrap px-3 py-1.5 text-start text-xs font-medium text-gray-secondary dark:text-dark-gray',
                    header.column.columnDef.meta?.headerClassName
                  )}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <Fragment key={row.id}>
              <tr
                className={row.getIsExpanded() ? 'bg-secondary-blue dark:bg-dark-500' : undefined}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={twMerge(
                      'px-3 py-4 text-start text-primary dark:text-dark-white desktop:p-3',
                      cell.column.columnDef.meta?.cellClassName
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
              {row.getIsExpanded() && (
                <tr className="bg-secondary-blue dark:bg-dark-500">
                  <td colSpan={row.getVisibleCells().length} className="p-2">
                    <SubRow row={row} />
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
