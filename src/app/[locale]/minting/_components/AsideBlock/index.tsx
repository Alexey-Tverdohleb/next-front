import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IProps } from '@/app/[locale]/minting/_components/AsideBlock/types';

const AsideBlock: FC<IProps> = ({ children }) => {
  return (
    <div
      className={twMerge(
        'bg-white dark:bg-dark-400 dark:text-white',
        'p-xxl mb-md w-[194px]',
        'border-[1px] border-gray-divider dark:border-dark-300 rounded-[8px]'
      )}
    >
      {children}
    </div>
  );
};

export default AsideBlock;
