import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { twMerge } from 'tailwind-merge';
import { columns } from '@/app/[locale]/markets/[Id]/_components/CallTable/columns';

const callTableData = {
  price: {
    amount: 0.527844,
    bid: 0.58695,
    ask: 0.58695,
  },
  strike_price: {
    amount: 0.723591,
    fiat_amount: '$0.244',
  },
  expire_date: '12.09.2024',
  min_price: {
    amount: 0.723591,
    fiat_amount: '$0.244',
  },
  max_price: {
    amount: 0.723591,
    fiat_amount: '$0.244',
  },
  volume: {
    amount: 0.723591,
    fiat_amount: '$0.244',
  },
  price_change: '+16.43%',
};

export default function CallTable({ isCall }: { isCall: boolean }) {
  const table = useReactTable({
    data: new Array(3).fill(callTableData),
    columns: columns(isCall),
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
                  'whitespace-nowrap px-3 py-1.5 text-end desktop:py-4',
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
              <td key={cell.id} className="px-3 py-0.5 text-end desktop:p-3">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
