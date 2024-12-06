import { FC } from 'react';

import { IProps } from '@/app/[locale]/my-options/_tables/HistoryTable/types';
import useColumns from '@/app/[locale]/my-options/_tables/HistoryTable/useColumns';
import useScreen from '@/hooks/useScreen';
import Table from '@/components/Table';
import ExpandElement from '@/app/[locale]/my-options/_tables/HistoryTable/ExpandElement';

const HistoryTable: FC<IProps> = ({ data = [] }) => {
  const { isDesktop } = useScreen();
  const columns = useColumns(isDesktop);

  return <Table data={data} columns={columns} ExpandElement={ExpandElement} />;
};

export default HistoryTable;
