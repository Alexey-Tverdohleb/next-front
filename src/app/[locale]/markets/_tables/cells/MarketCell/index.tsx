import { FC } from 'react';

import { IMarketsCell } from '@/app/[locale]/markets/_tables/cells/MarketCell/types';
import RightAlignCell from '@/components/Table/RightAlignCell';

const MarketCell: FC<IMarketsCell> = ({ getValue }) => {
  const { askPrice } = getValue();

  return (
    <RightAlignCell>
      <div>{askPrice}</div>
    </RightAlignCell>
  );
};

export default MarketCell;
