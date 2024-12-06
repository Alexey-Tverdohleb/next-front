import { createColumnHelper } from '@tanstack/table-core';
import { useTranslations } from 'next-intl';
import ActionCell from '@/app/[locale]/trading-view/_components/OrderManagement/OpenOrdersTab/cells/ActionCell';
import PriceCell from '@/app/[locale]/trading-view/_components/OrderManagement/OpenOrdersTab/cells/PriceCell';
import TypeCell from '@/app/[locale]/trading-view/_components/OrderManagement/OpenOrdersTab/cells/TypeCell';

export type OpenOrderType = {
  pair: string;
  date: string;
  type: string;
  price: number;
  amount: number;
  filled: string;
};

const columnHelper = createColumnHelper<OpenOrderType>();

function Header({ column }: { column: { id: string } }) {
  const t = useTranslations('OpenOrdersTable');

  return <span>{t(column.id)}</span>;
}

export const columns = [
  columnHelper.accessor('pair', {
    header: Header,
    cell: ({ getValue }) => getValue(),
    meta: {
      cellClassName: 'text-sm font-semibold',
    },
  }),
  columnHelper.accessor('date', {
    header: Header,
    cell: ({ getValue }) => getValue(),
    meta: {
      cellClassName: 'text-sm font-medium',
    },
  }),
  columnHelper.accessor('type', {
    header: Header,
    cell: TypeCell,
    meta: {
      headerClassName: 'text-center',
      cellClassName: 'text-sm font-medium text-end desktop:text-center',
    },
  }),
  columnHelper.accessor('price', {
    header: Header,
    cell: PriceCell,
    meta: {
      headerClassName: 'text-end',
      cellClassName: 'text-sm font-medium text-end',
    },
  }),
  columnHelper.accessor('amount', {
    header: Header,
    cell: ({ getValue }) => getValue(),
    meta: {
      headerClassName: 'text-end',
      cellClassName: 'text-sm font-medium text-end',
    },
  }),
  columnHelper.accessor('filled', {
    header: Header,
    cell: ({ getValue }) => getValue(),
    meta: {
      headerClassName: 'text-end',
      cellClassName: 'text-sm font-medium text-end',
    },
  }),
  columnHelper.display({
    id: 'action',
    header: Header,
    cell: ActionCell,
    meta: {
      headerClassName: 'text-center',
      cellClassName: 'text-sm font-medium text-center',
    },
  }),
];
