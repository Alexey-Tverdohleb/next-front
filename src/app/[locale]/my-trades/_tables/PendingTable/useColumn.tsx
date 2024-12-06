import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/table-core';

import { IToken } from '@/types/token';
import PairCell from '@/app/[locale]/my-trades/_tables/cells/PairCell';
import InputCell from '@/app/[locale]/my-trades/_tables/cells/InputCell';
import OutputCell from '@/app/[locale]/my-trades/_tables/cells/OutputCell';
import ExpandLimitPriceCell from '@/app/[locale]/my-trades/_tables/cells/ExpandLimitPriceCell';
import NewLimitCell from '@/app/[locale]/my-trades/_tables/cells/NewLimitCell';
import ActionsCell from '@/app/[locale]/my-trades/_tables/cells/ActionCell';
import PairHeader from '@/app/[locale]/my-trades/_tables/headers/PairHeader';
import LimitPriceHeader from '@/app/[locale]/my-trades/_tables/headers/LimitPriceHeader';
import InputHeader from '@/app/[locale]/my-trades/_tables/headers/InputHeader';
import OutputHeader from '@/app/[locale]/my-trades/_tables/headers/OutputHeader';
import ActionHeader from '@/app/[locale]/my-trades/_tables/headers/ActionHeader';

export default function useColumn(isDesktop: boolean) {
  return useMemo(() => {
    const desktopColumn = [
      {
        id: 'pair',
        accessorKey: 'info',
        size: 305,
        header: PairHeader,
        cell: PairCell,
      },
      {
        id: 'limitPrice',
        accessorKey: 'price',
        header: LimitPriceHeader,
        cell: NewLimitCell,
      },
      {
        id: 'input',
        accessorKey: 'price',
        header: InputHeader,
        cell: InputCell,
      },
      {
        id: 'output',
        accessorKey: 'price',
        header: OutputHeader,
        cell: OutputCell,
      },
      {
        id: 'action',
        accessorKey: 'info',
        header: ActionHeader,
        cell: ActionsCell,
      },
    ] as Array<ColumnDef<IToken, unknown>>;

    const mobileColumn = [
      {
        id: 'pair',
        accessorKey: 'info',
        size: 185,
        header: PairHeader,
        cell: PairCell,
      },
      {
        id: 'limitPrice',
        accessorKey: 'price',
        size: 140,
        header: LimitPriceHeader,
        cell: ExpandLimitPriceCell,
      },
    ] as Array<ColumnDef<IToken, unknown>>;

    return isDesktop ? desktopColumn : mobileColumn;
  }, [isDesktop]);
}
