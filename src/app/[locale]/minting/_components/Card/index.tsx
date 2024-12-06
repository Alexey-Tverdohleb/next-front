import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IProps } from '@/app/[locale]/minting/_components/Card/types';

const Card: FC<IProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        'bg-white dark:bg-dark-400',
        'flex w-full max-w-[600px] flex-shrink-0 flex-col px-md py-xl desktop:px-xxl desktop:py-xxl',
        'rounded-[8px] border-[1px] border-gray-divider dark:border-dark-300',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
