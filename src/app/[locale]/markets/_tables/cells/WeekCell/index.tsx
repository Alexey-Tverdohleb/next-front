import { FC } from 'react';

import { IWeekCell } from '@/app/[locale]/markets/_tables/cells/WeekCell/types';
import RightAlignCell from '@/components/Table/RightAlignCell';

const WeekCell: FC<IWeekCell> = ({ getValue }) => {
  const { askPrice } = getValue();

  return (
    <RightAlignCell>
      <div>{askPrice}</div>
    </RightAlignCell>
  );
};

export default WeekCell;
