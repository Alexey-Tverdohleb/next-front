import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IProps } from '@/components/Badge/types';

const Badge: FC<IProps> = ({ label, className }) => {
  return (
    <div
      className={twMerge(
        'bg-blue dark:bg-dark-200 rounded-[4px]',
        'text-white dark:text-dark-white text-xs font-[600]',
        'desktop:px-md desktop:py-xs px-xs py-[2px] shrink-0',
        className
      )}
    >
      {label}
    </div>
  );
};

export default Badge;
