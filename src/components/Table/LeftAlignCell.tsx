import { FC } from 'react';

import { IAlignCell } from '@/components/Table/types';

const LefAlignCell: FC<IAlignCell> = ({ children, title }) => {
  return (
    <div title={title} className="flex items-center justify-start w-full">
      {children}
    </div>
  );
};

export default LefAlignCell;
