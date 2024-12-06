import { FC } from 'react';

import { IProps } from '@/app/[locale]/my-options/_tables/cells/ExpandStrikeCell/types';
import ExpandButton from '@/app/[locale]/my-options/_tables/components/ExpandButton';
import StrikeCell from '@/app/[locale]/my-options/_tables/cells/StrikeCell';
import RightAlignCell from '@/components/Table/RightAlignCell';

const ExpandStrikeCell: FC<IProps> = ({ getValue, row, table }) => {
  return (
    <RightAlignCell>
      <StrikeCell getValue={getValue} />
      <ExpandButton row={row} table={table} className="ml-sm" />
    </RightAlignCell>
  );
};

export default ExpandStrikeCell;
