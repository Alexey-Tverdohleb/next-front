import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { TIcon } from '@/types/common';

const ChevronRightIcon: FC<TIcon> = ({ className }) => {
  return (
    <svg
      className={twMerge(className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon/chevron-right">
        <path
          id="Vector"
          d="M9 18L15 12L9 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default ChevronRightIcon;
