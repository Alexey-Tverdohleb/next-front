import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { TIcon } from '@/types/common';

const UpIcon: FC<TIcon> = ({ className }) => {
  return (
    <svg
      className={twMerge(className)}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon/chevron-up">
        <path
          id="Vector"
          d="M18.5 15.5L12.5 9.5L6.5 15.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default UpIcon;
