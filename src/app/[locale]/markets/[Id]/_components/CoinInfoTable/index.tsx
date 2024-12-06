import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { twMerge } from 'tailwind-merge';
import { COLUMNS } from '@/app/[locale]/markets/[Id]/_components/CoinInfoTable/columns';
import { IToken } from '@/types/token';

export default function CoinInfoTable({ data }: { data: Array<IToken> }) {
  const table = useReactTable({
    data: data,
    columns: COLUMNS,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="w-full table-auto">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="bg-secondary-blue dark:bg-dark-300">
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className={twMerge(
                  'whitespace-nowrap px-3 py-1.5 text-end text-xs font-medium dark:text-dark-gray desktop:py-4',
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
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="px-3 py-0.5 text-end dark:text-dark-white desktop:p-3">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
