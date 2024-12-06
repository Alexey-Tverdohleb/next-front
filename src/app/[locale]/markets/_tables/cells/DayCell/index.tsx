import { FC } from 'react';

import { IDayCell } from '@/app/[locale]/markets/_tables/cells/DayCell/types';
import RightAlignCell from '@/components/Table/RightAlignCell';

const DayCell: FC<IDayCell> = ({ getValue }) => {
  const { askPrice } = getValue();

  return (
    <RightAlignCell>
      <div>{askPrice}</div>
    </RightAlignCell>
  );
};

export default DayCell;
