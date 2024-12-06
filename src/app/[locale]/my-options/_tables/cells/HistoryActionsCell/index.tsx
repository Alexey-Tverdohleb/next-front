import { FC } from 'react';

import { IProps } from '@/app/[locale]/my-options/_tables/cells/HistoryActionsCell/types';
import Badge from '@/components/Badge';
import RightAlignCell from '@/components/Table/RightAlignCell';

const HistoryActionsCell: FC<IProps> = () => {
  return (
    <RightAlignCell>
      <Badge label="Cancelled" className="ml-sm" />
      <Badge label="Expired" className="ml-sm" />
    </RightAlignCell>
  );
};

export default HistoryActionsCell;
