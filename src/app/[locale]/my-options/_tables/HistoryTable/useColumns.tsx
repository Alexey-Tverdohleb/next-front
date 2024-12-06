import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/table-core';

import { IToken } from '@/types/token';
import TypeCell from '@/app/[locale]/my-options/_tables/cells/TypeCell';
import TokenCell from '@/app/[locale]/my-options/_tables/cells/TokenCell/TokenCell';
import StrikeCell from '@/app/[locale]/my-options/_tables/cells/StrikeCell';
import AmountCell from '@/app/[locale]/my-options/_tables/cells/AmountCell';
import IssueDateCell from '@/app/[locale]/my-options/_tables/cells/IssueDateCell';
import ExpiredDateCell from '@/app/[locale]/my-options/_tables/cells/ExpiredDateCell';
import RedeemDateCell from '@/app/[locale]/my-options/_tables/cells/RedeemDateCell';
import HistoryActionsCell from '@/app/[locale]/my-options/_tables/cells/HistoryActionsCell';
import ExpandStrikeCell from '@/app/[locale]/my-options/_tables/cells/ExpandStrikeCell';
import TypeHeader from '@/app/[locale]/my-options/_tables/headers/TypeHeader';
import TokenHeader from '@/app/[locale]/my-options/_tables/headers/TokenHeader';
import StrikePriceHeader from '@/app/[locale]/my-options/_tables/headers/StrikePriceHeader';
import AmountHeader from '@/app/[locale]/my-options/_tables/headers/AmountHeader';
import IssueDateHeader from '@/app/[locale]/my-options/_tables/headers/IssueDateHeader';
import RedeemDateHeader from '@/app/[locale]/my-options/_tables/headers/RedeemDateHeader';
import ExpireDateHeader from '@/app/[locale]/my-options/_tables/headers/ExpireDateHeader';
import ActionHeader from '@/app/[locale]/my-options/_tables/headers/ActionHeader';

export default function useColumns(isDesktop: boolean) {
  return useMemo(() => {
    const desktopColumns = [
      {
        id: 'type',
        accessorKey: 'info',
        maxSize: 50,
        header: TypeHeader,
        cell: TypeCell,
      },
      {
        id: 'token',
        accessorKey: 'info',
        header: TokenHeader,
        cell: TokenCell,
      },
      {
        id: 'strikePrice',
        accessorKey: 'price',
        header: StrikePriceHeader,
        cell: StrikeCell,
      },
      {
        id: 'amount',
        accessorKey: 'price',
        header: AmountHeader,
        cell: AmountCell,
      },
      {
        id: 'issueDate',
        accessorKey: 'price',
        header: IssueDateHeader,
        cell: IssueDateCell,
      },
      {
        id: 'redeemDate',
        accessorKey: 'price',
        header: RedeemDateHeader,
        cell: RedeemDateCell,
      },
      {
        id: 'expireDate',
        accessorKey: 'price',
        header: ExpireDateHeader,
        cell: ExpiredDateCell,
      },
      {
        id: 'Actions',
        header: ActionHeader,
        cell: HistoryActionsCell,
      },
    ] as Array<ColumnDef<IToken, unknown>>;

    const mobileColumns = [
      {
        id: 'type',
        accessorKey: 'info',
        size: 50,
        header: TypeHeader,
        cell: TypeCell,
      },
      {
        id: 'token',
        size: 120,
        accessorKey: 'info',
        header: TypeHeader,
        cell: TokenCell,
      },
      {
        id: 'strikePrice',
        accessorKey: 'price',
        header: StrikePriceHeader,
        cell: ExpandStrikeCell,
      },
    ] as Array<ColumnDef<IToken, unknown>>;

    return isDesktop ? desktopColumns : mobileColumns;
  }, [isDesktop]);
}
