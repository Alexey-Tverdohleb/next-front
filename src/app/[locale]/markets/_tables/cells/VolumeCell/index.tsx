import { FC } from 'react';

import { IVolumeCell } from '@/app/[locale]/markets/_tables/cells/VolumeCell/types';
import RightAlignCell from '@/components/Table/RightAlignCell';

const VolumeCell: FC<IVolumeCell> = ({ getValue }) => {
  const { askPrice } = getValue();

  return (
    <RightAlignCell>
      <div>{askPrice}</div>
    </RightAlignCell>
  );
};

export default VolumeCell;
