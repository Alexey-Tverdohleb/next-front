import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { TIcon } from '@/types/common';

const ArrowLeftIcon: FC<TIcon> = ({ className }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge(className)}
    >
      <g id="icon/arrow-left">
        <path
          id="Vector"
          d="M19.5 12H5.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M12.5 19L5.5 12L12.5 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default ArrowLeftIcon;
