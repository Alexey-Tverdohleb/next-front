import { FC } from 'react';

import { ICell } from '@/app/[locale]/my-trades/_tables/cells/ExpandLimitPriceCell/types';
import ExpandButton from '@/app/[locale]/my-trades/_tables/ExpandButton';
import LimitPriceCell from '@/app/[locale]/my-trades/_tables/cells/LimitPriceCell';
import RightAlignCell from '@/components/Table/RightAlignCell';

const ExpandLimitPriceCell: FC<ICell> = ({ row, table, getValue }) => {
  return (
    <RightAlignCell>
      <LimitPriceCell getValue={getValue} />
      <ExpandButton row={row} table={table} />
    </RightAlignCell>
  );
};

export default ExpandLimitPriceCell;
