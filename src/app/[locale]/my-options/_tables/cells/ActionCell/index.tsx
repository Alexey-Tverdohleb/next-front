import { FC, useState } from 'react';

import { IProps } from '@/components/Dropdown/types';
import { TOption } from '@/types/common';
import Dropdown from '@/components/Dropdown';
import { ACTION_OPTIONS } from '@/app/[locale]/my-options/_tables/constants';
import RightAlignCell from '@/components/Table/RightAlignCell';

const ActionsCell: FC<IProps> = () => {
  const [value, setValue] = useState<TOption | undefined>(undefined);

  return (
    <RightAlignCell>
      <Dropdown value={value} onSelect={setValue} options={ACTION_OPTIONS} />
    </RightAlignCell>
  );
};

export default ActionsCell;
