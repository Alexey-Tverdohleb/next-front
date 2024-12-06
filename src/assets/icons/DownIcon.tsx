import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { TIcon } from '@/types/common';

const DownIcon: FC<TIcon> = ({ className }) => {
  return (
    <svg
      className={twMerge(className)}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon/chevron-down">
        <path
          id="Vector"
          d="M6.5 9L12.5 15L18.5 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default DownIcon;
