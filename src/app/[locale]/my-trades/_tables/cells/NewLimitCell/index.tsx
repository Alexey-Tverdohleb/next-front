import { FC } from 'react';

import { ICell } from '@/app/[locale]/my-trades/_tables/cells/NewLimitCell/types';
import NewLimitInput from '@/app/[locale]/my-trades/_components/NewLimitInput';
import RightAlignCell from '@/components/Table/RightAlignCell';

const NewLimitCell: FC<ICell> = ({ getValue }) => {
  const { askPrice } = getValue();

  return (
    <RightAlignCell>
      <NewLimitInput value={askPrice} />
    </RightAlignCell>
  );
};

export default NewLimitCell;
