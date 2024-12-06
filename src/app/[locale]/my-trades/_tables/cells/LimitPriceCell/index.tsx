import { FC } from 'react';

import { ICell } from '@/app/[locale]/my-trades/_tables/cells/LimitPriceCell/types';
import RightAlignCell from '@/components/Table/RightAlignCell';

const LimitPriceCell: FC<ICell> = ({ getValue }) => {
  const { askPrice } = getValue();

  return (
    <RightAlignCell>
      <span>{Math.round(askPrice)}</span>
    </RightAlignCell>
  );
};

export default LimitPriceCell;
