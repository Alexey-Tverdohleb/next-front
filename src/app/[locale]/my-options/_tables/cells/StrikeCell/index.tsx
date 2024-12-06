import { FC } from 'react';

import { IProps } from '@/app/[locale]/my-options/_tables/cells/StrikeCell/types';
import { truncateText } from '@/helpers/common';
import RightAlignCell from '@/components/Table/RightAlignCell';

const StrikeCell: FC<IProps> = ({ getValue }) => {
  const { askPrice } = getValue();

  return (
    <RightAlignCell title={String(askPrice)}>
      <span>{truncateText(String(askPrice), 5)}</span>
    </RightAlignCell>
  );
};

export default StrikeCell;
