import { FC } from 'react';

import { IProps } from '@/app/[locale]/my-options/_tables/IssuedTable/types';
import useColumns from '@/app/[locale]/my-options/_tables/IssuedTable/useColumns';
import Table from '@/components/Table';
import ExpandElement from '@/app/[locale]/my-options/_tables/IssuedTable/ExpandElement';
import useScreen from '@/hooks/useScreen';

const IssuedTable: FC<IProps> = ({ data = [] }) => {
  const { isDesktop } = useScreen();
  const columns = useColumns(isDesktop);

  return <Table data={data} columns={columns} ExpandElement={ExpandElement} />;
};

export default IssuedTable;
