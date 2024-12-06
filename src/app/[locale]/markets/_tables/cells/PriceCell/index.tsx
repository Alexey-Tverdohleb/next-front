import { FC } from 'react';

import { IPriceCell } from '@/app/[locale]/markets/_tables/cells/PriceCell/types';
import RightAlignCell from '@/components/Table/RightAlignCell';

const PriceCell: FC<IPriceCell> = ({ getValue }) => {
  const { askPrice } = getValue();

  return (
    <RightAlignCell>
      <div>{Math.round(askPrice)}</div>
    </RightAlignCell>
  );
};

export default PriceCell;
