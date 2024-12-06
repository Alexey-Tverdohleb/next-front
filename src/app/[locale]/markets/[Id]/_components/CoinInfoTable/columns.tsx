import { createColumnHelper } from '@tanstack/table-core';
import { IToken } from '@/types/token';
import FavCell from '@/app/[locale]/markets/_tables/cells/FavCell';
import NameHeader from '@/app/[locale]/markets/_tables/headers/NameHeader';
import NameCell from '@/app/[locale]/markets/_tables/cells/NameCell';
import PriceHeader from '@/app/[locale]/markets/_tables/headers/PriceHeader';
import PriceCell from '@/app/[locale]/markets/_tables/cells/PriceCell';
import DayHeader from '@/app/[locale]/markets/_tables/headers/DayHeader';
import DayCell from '@/app/[locale]/markets/_tables/cells/DayCell';
import WeekHeader from '@/app/[locale]/markets/_tables/headers/WeekHeader';
import WeekCell from '@/app/[locale]/markets/_tables/cells/WeekCell';
import VolumeHeader from '@/app/[locale]/markets/_tables/headers/Volume';
import VolumeCell from '@/app/[locale]/markets/_tables/cells/VolumeCell';
import MarketHeader from '@/app/[locale]/markets/_tables/headers/MarketHeader';
import MarketCell from '@/app/[locale]/markets/_tables/cells/MarketCell';
import LastHeader from '@/app/[locale]/markets/_tables/headers/LastHeader';
import LastCell from '@/app/[locale]/markets/_tables/cells/LastCell';

const columnHelper = createColumnHelper<IToken>();

export const COLUMNS = [
  columnHelper.display({
    id: 'favAction',
    cell: FavCell,
  }),
  columnHelper.accessor('info', {
    id: 'name',
    header: NameHeader,
    cell: NameCell,
  }),
  columnHelper.accessor('price', {
    id: 'price',
    header: PriceHeader,
    cell: PriceCell,
  }),
  columnHelper.accessor('price', {
    id: 'day',
    header: DayHeader,
    cell: DayCell,
  }),
  columnHelper.accessor('price', {
    id: 'week',
    header: WeekHeader,
    cell: WeekCell,
  }),
  columnHelper.accessor('price', {
    id: 'volume',
    header: VolumeHeader,
    cell: VolumeCell,
  }),
  columnHelper.accessor('price', {
    id: 'market',
    header: MarketHeader,
    cell: MarketCell,
  }),
  columnHelper.accessor('price', {
    id: 'last',
    header: LastHeader,
    cell: ({ getValue }) => {
      return <LastCell getValue={getValue} withRightIcon={false} />;
    },
  }),
];
