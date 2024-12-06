'use client';
import { useMemo } from 'react';

import Card from '@/app/[locale]/minting/_components/Card';
import Filters from '@/app/[locale]/my-trades/_components/Filters';
import MyTradesTable from '@/app/[locale]/my-trades/_tables/MyTradesTable';
import useMyTrades from '@/context/my-trades/useMyTrades';
import PendingTable from '@/app/[locale]/my-trades/_tables/PendingTable';

const MyTradesPage = () => {
  const { filteredData } = useMyTrades();

  // TODO: fetch and pass pending data to the table
  const pendingData = useMemo(() => filteredData.slice(0, 2), [filteredData]);

  return (
    <Card className="max-w-full">
      <Filters />
      {!!pendingData.length && <PendingTable data={pendingData} className="desktop:mb-xl mb-md" />}

      <MyTradesTable data={filteredData} />
    </Card>
  );
};

export default MyTradesPage;
