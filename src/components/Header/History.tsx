import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import ClockIcon from '@/assets/icons/ClockIcon';
import { IHistory } from '@/components/Header/types';

const History: FC<IHistory> = ({ className }) => {
  return (
    <div className={twMerge('shrink-0', className)}>
      <ClockIcon className="text-primary dark:dark-gray" />
    </div>
  );
};

export default History;
