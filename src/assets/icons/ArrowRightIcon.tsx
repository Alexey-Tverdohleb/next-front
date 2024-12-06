import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { TIcon } from '@/types/common';

const ArrowRightIcon: FC<TIcon> = ({ className }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge(className)}
    >
      <g id="icon/arrow-right">
        <path
          id="Vector"
          d="M5 12.5H19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M12 5.5L19 12.5L12 19.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default ArrowRightIcon;
