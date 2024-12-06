import { useTranslations } from 'next-intl';
import { createColumnHelper, Getter } from '@tanstack/table-core';
import ArrowUpIcon from '@/assets/icons/ArrowUpIcon';
import { ICallTable } from '@/app/[locale]/markets/[Id]/_components/CallTable/types';
import ArrowDownIcon from '@/assets/icons/ArrowDownIcon';

const columnHelper = createColumnHelper<ICallTable>();

function Header({ column }: { column: { id: string } }) {
  const t = useTranslations('MarketDetailsTable');

  return (
    <div className="text-xs font-medium text-gray-secondary dark:text-dark-gray desktop:text-sm">
      {t(column.id)}
    </div>
  );
}

function CommonCell({ getValue }: { getValue: Getter<{ amount: number; fiat_amount: number }> }) {
  const { amount, fiat_amount } = getValue();

  return (
    <div>
      <p className="text-sm font-medium dark:text-dark-white desktop:text-md">{amount}</p>
      <p className="text-[10px] font-medium text-gray-secondary dark:text-dark-gray desktop:text-sm">
        {fiat_amount}
      </p>
    </div>
  );
}

export const columns = (isCall: boolean) => [
  columnHelper.display({
    id: 'name',
    header: () => (
      <span className="mr-auto inline-flex items-center text-md font-semibold text-primary dark:text-dark-white desktop:text-lg">
        <span>{isCall ? 'Call' : 'Put'}</span>
        {isCall ? (
          <ArrowUpIcon className="ml-2 h-[16px] w-[16px] text-green" />
        ) : (
          <ArrowDownIcon className="ml-2 h-[16px] w-[16px] text-red" />
        )}
      </span>
    ),
    meta: {
      headerClassName: 'text-start',
    },
  }),
  columnHelper.accessor('price', {
    header: Header,
    cell: ({ getValue }) => {
      const { amount, ask, bid } = getValue();

      return (
        <div>
          <p className="text-sm font-medium dark:text-dark-white desktop:text-md">{amount}</p>
          <p className="whitespace-nowrap text-[10px] font-medium text-gray-secondary dark:text-dark-gray desktop:text-xs">
            bid: {bid}
          </p>
          <p className="whitespace-nowrap text-[10px] font-medium text-gray-secondary dark:text-dark-gray desktop:text-xs">
            ask: {ask}
          </p>
        </div>
      );
    },
  }),
  columnHelper.accessor('strike_price', {
    header: Header,
    cell: CommonCell,
  }),
  columnHelper.accessor('expire_date', {
    header: Header,
    cell: ({ getValue }) => {
      const value = getValue();
      return <p className="text-sm font-medium dark:text-dark-white desktop:text-md">{value}</p>;
    },
  }),
  columnHelper.accessor('min_price', {
    header: Header,
    cell: CommonCell,
  }),
  columnHelper.accessor('max_price', {
    header: Header,
    cell: CommonCell,
  }),
  columnHelper.accessor('volume', {
    header: Header,
    cell: CommonCell,
  }),
  columnHelper.accessor('price_change', {
    header: Header,
    cell: ({ getValue }) => {
      const value = getValue();

      return (
        <div className="inline-flex items-center text-green">
          <span className="text-sm desktop:text-md">{value}</span>
          <ArrowUpIcon className="ml-1 h-[16px] w-[16px]" />
        </div>
      );
    },
  }),
];
