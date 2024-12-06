import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IInfoBlock } from '@/app/[locale]/markets/_components/InfoBlockHeader/types';

const InfoBlock: FC<IInfoBlock> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        'desktop:p-xl p-md',
        'bg-white dark:bg-dark-400',
        'border-[1px] border-gray-divider dark:border-dark-300 rounded-[8px]',
        'desktop:mr-xl mr-sm desktop:last:mr-0 last:mr-0',
        'grow shrink-0',
        className
      )}
    >
      {children}
    </div>
  );
};

export default InfoBlock;
