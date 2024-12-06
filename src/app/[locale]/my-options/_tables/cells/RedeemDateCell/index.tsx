import { FC } from 'react';

import { IProps } from '@/app/[locale]/my-options/_tables/cells/RedeemDateCell/types';
import RightAlignCell from '@/components/Table/RightAlignCell';

const RedeemDateCell: FC<IProps> = ({ getValue }) => {
  const { askPrice } = getValue();

  return (
    <RightAlignCell>
      <span>{askPrice}</span>
    </RightAlignCell>
  );
};

export default RedeemDateCell;
