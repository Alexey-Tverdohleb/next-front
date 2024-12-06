import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/table-core';

import { IToken } from '@/types/token';
import NameHeader from '@/app/[locale]/markets/_tables/headers/NameHeader';
import PriceHeader from '@/app/[locale]/markets/_tables/headers/PriceHeader';
import DayHeader from '@/app/[locale]/markets/_tables/headers/DayHeader';
import WeekHeader from '@/app/[locale]/markets/_tables/headers/WeekHeader';
import VolumeHeader from '@/app/[locale]/markets/_tables/headers/Volume';
import MarketHeader from '@/app/[locale]/markets/_tables/headers/MarketHeader';
import LastHeader from '@/app/[locale]/markets/_tables/headers/LastHeader';
import FavCell from '@/app/[locale]/markets/_tables/cells/FavCell';
import NameCell from '@/app/[locale]/markets/_tables/cells/NameCell';
import DayCell from '@/app/[locale]/markets/_tables/cells/DayCell';
import PriceCell from '@/app/[locale]/markets/_tables/cells/PriceCell';
import WeekCell from '@/app/[locale]/markets/_tables/cells/WeekCell';
import VolumeCell from '@/app/[locale]/markets/_tables/cells/VolumeCell';
import MarketCell from '@/app/[locale]/markets/_tables/cells/MarketCell';
import LastCell from '@/app/[locale]/markets/_tables/cells/LastCell';
import TokenPairCell from '@/app/[locale]/markets/_tables/cells/TokenPairCell';
import TokenInfoCell from '@/app/[locale]/markets/_tables/cells/TokenInfoCell';

export default function useColumn(isDesktop: boolean) {
  return useMemo(() => {
    const desktopColumn = [
      {
        id: 'favAction',
        cell: FavCell,
        size: 40,
      },
      {
        id: 'name',
        accessorKey: 'info',
        size: 180,
        header: NameHeader,
        cell: NameCell,
      },
      {
        id: 'price',
        header: PriceHeader,
        accessorKey: 'price',
        cell: PriceCell,
      },
      {
        id: 'day',
        accessorKey: 'price',
        header: DayHeader,
        cell: DayCell,
      },
      {
        id: 'week',
        header: WeekHeader,
        accessorKey: 'price',
        cell: WeekCell,
      },
      {
        id: 'volume',
        header: VolumeHeader,
        accessorKey: 'price',
        cell: VolumeCell,
      },
      {
        id: 'market',
        header: MarketHeader,
        accessorKey: 'price',
        cell: MarketCell,
      },
      {
        id: 'last',
        header: LastHeader,
        accessorKey: 'price',
        cell: LastCell,
      },
    ] as Array<ColumnDef<IToken, unknown>>;

    const mobileColumn = [
      {
        id: 'favAction',
        cell: FavCell,
        size: 50,
      },
      {
        id: 'name',
        accessorKey: 'info',
        header: NameHeader,
        cell: TokenPairCell,
        size: 55,
        meta: {
          sticky: true,
        },
      },
      {
        id: 'tokenInfo',
        accessorKey: 'info',
        header: false,
        size: 165,
        cell: TokenInfoCell,
      },
      {
        id: 'price',
        header: PriceHeader,
        accessorKey: 'price',
        cell: PriceCell,
      },
      {
        id: 'day',
        accessorKey: 'price',
        header: DayHeader,
        cell: DayCell,
      },
      {
        id: 'week',
        header: WeekHeader,
        accessorKey: 'price',
        cell: WeekCell,
      },
      {
        id: 'volume',
        header: VolumeHeader,
        accessorKey: 'price',
        cell: VolumeCell,
      },
    ] as Array<ColumnDef<IToken, unknown>>;

    return isDesktop ? desktopColumn : mobileColumn;
  }, [isDesktop]);
}
