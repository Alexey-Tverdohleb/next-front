import { FC } from 'react';

import { IProps } from '@/app/[locale]/my-options/_tables/cells/IssueDateCell/types';
import RightAlignCell from '@/components/Table/RightAlignCell';

const IssueDateCell: FC<IProps> = ({ getValue }) => {
  const { askPrice } = getValue();

  return (
    <RightAlignCell>
      <span>{askPrice}</span>
    </RightAlignCell>
  );
};

export default IssueDateCell;
