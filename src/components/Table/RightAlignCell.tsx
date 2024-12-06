import { FC } from 'react';

import { IAlignCell } from '@/components/Table/types';

const RightAlignCell: FC<IAlignCell> = ({ children, title }) => {
  return (
    <div title={title} className="flex items-center justify-end w-full">
      {children}
    </div>
  );
};

export default RightAlignCell;
