import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { IProps } from '@/components/ExpandBlock/types';
import useToggle from '@/hooks/useToggle/useToggle';
import UpIcon from '@/assets/icons/UpIcon';
import DownIcon from '@/assets/icons/DownIcon';

const ExpandBlock: FC<IProps> = ({ children, moreLabel, lessLabel }) => {
  const [isExpanded, toggleExpanded] = useToggle({ initial: false });

  return (
    <div className="w-full text-center text-dark-gray">
      <button
        type="button"
        onClick={toggleExpanded}
        className="flex w-full justify-center items-center text-md font-[500] p-sm mb-sm"
      >
        <div className="mr-md">{isExpanded ? lessLabel : moreLabel}</div>
        {isExpanded ? <UpIcon /> : <DownIcon />}
      </button>
      <div className={twMerge('overflow-hidden', isExpanded ? 'h-full' : 'h-[0px]')}>
        {children}
      </div>
    </div>
  );
};

export default ExpandBlock;
