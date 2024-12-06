import { FC } from 'react';

import { ICell } from '@/app/[locale]/my-trades/_tables/cells/InputCell/types';
import RightAlignCell from '@/components/Table/RightAlignCell';

const InputCell: FC<ICell> = ({ getValue }) => {
  const { askPrice } = getValue();

  return (
    <RightAlignCell>
      <span>{askPrice}</span>
    </RightAlignCell>
  );
};

export default InputCell;
