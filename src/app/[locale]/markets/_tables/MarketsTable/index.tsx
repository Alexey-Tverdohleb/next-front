'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Row } from '@tanstack/table-core';

import { ITable } from '@/app/[locale]/markets/_tables/MarketsTable/types';
import useColumn from '@/app/[locale]/markets/_tables/MarketsTable/useColumn';
import Table from '@/components/Table';
import useScreen from '@/hooks/useScreen';
import useMarkets from '@/context/markets/useMarkets';
import { useSetMarketData } from '@/store/hooks/markets';
import { IToken } from '@/types/token';

const MarketsTable: FC<ITable> = () => {
  const { filteredData } = useMarkets();
  const router = useRouter();

  const { isDesktop } = useScreen();
  const columns = useColumn(isDesktop);

  const setMarketData = useSetMarketData();

  const showSwipeTip = !isDesktop;

  const handleRowClick = (data: Row<IToken>) => {
    setMarketData(data.original);
    const symbol = data.original.info.symbol;
    router.push(`markets/${symbol}`);
  };

  return (
    <Table
      paginated
      data={filteredData}
      columns={columns}
      showSwipeTip={showSwipeTip}
      onClick={handleRowClick}
    />
  );
};

export default MarketsTable;
