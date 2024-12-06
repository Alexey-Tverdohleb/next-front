import { FC } from 'react';

import { ICell } from '@/app/[locale]/my-trades/_tables/cells/ActionCell/types';
import NewLimitButton from '@/app/[locale]/my-trades/_components/NewLimitButton';
import RightAlignCell from '@/components/Table/RightAlignCell';

const ActionsCell: FC<ICell> = () => {
  return (
    <RightAlignCell>
      <NewLimitButton />
    </RightAlignCell>
  );
};

export default ActionsCell;
