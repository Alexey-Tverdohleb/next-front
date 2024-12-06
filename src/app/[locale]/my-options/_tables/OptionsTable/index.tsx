import { FC } from 'react';

import Table from '@/components/Table';
import { IProps } from '@/app/[locale]/my-options/_tables/OptionsTable/types';
import useColumns from '@/app/[locale]/my-options/_tables/OptionsTable/useColumns';
import ExpandElement from '@/app/[locale]/my-options/_tables/OptionsTable/ExpandElement';
import useScreen from '@/hooks/useScreen';

const OptionsTable: FC<IProps> = ({ data = [] }) => {
  const { isDesktop } = useScreen();
  const columns = useColumns(isDesktop);

  return <Table data={data} columns={columns} ExpandElement={ExpandElement} />;
};

export default OptionsTable;
