import { FC } from 'react';

import { IProps } from '@/app/[locale]/my-options/_tables/cells/TypeCell/types';
import LeftAlignCell from '@/components/Table/LeftAlignCell';

const TypeCell: FC<IProps> = () => {
  return (
    <LeftAlignCell>
      <span>Put</span>
    </LeftAlignCell>
  );
};

export default TypeCell;
