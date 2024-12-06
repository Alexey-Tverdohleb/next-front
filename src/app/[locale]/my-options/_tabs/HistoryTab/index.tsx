import { FC } from 'react';

import { IProps } from '@/app/[locale]/my-options/_tabs/HistoryTab/types';
import Card from '@/app/[locale]/minting/_components/Card';
import HistoryTable from '@/app/[locale]/my-options/_tables/HistoryTable';
import Filters from '@/app/[locale]/my-options/_tabs/HistoryTab/Filters';
import useOptionsHistory from '@/context/options-history/useOptionsHistory';

const HistoryTab: FC<IProps> = () => {
  const { filteredData } = useOptionsHistory();

  return (
    <Card className="max-w-full">
      <Filters />

      <HistoryTable data={filteredData} />
    </Card>
  );
};

export default HistoryTab;
