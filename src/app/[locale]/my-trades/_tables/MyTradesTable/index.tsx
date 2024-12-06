import { FC } from 'react';

import { IMyTradesTable } from '@/app/[locale]/my-trades/_tables/MyTradesTable/types';
import Table from '@/components/Table';
import useScreen from '@/hooks/useScreen';
import useColumn from '@/app/[locale]/my-trades/_tables/MyTradesTable/useColumn';
import ExpandElement from '@/app/[locale]/my-trades/_tables/MyTradesTable/ExpandElement';

const MyTradesTable: FC<IMyTradesTable> = ({ data = [] }) => {
  const { isDesktop } = useScreen();
  const columns = useColumn(isDesktop);

  return <Table paginated data={data} columns={columns} ExpandElement={ExpandElement} />;
};

export default MyTradesTable;
