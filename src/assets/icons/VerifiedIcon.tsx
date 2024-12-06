import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { TIcon } from '@/types/common';

const VerifiedIcon: FC<TIcon> = ({ className }) => {
  return (
    <svg
      className={twMerge(className)}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_890_13932)">
        <path
          d="M8.00016 14.6667C11.6822 14.6667 14.6668 11.682 14.6668 8.00004C14.6668 4.31804 11.6822 1.33337 8.00016 1.33337C4.31816 1.33337 1.3335 4.31804 1.3335 8.00004C1.3335 11.682 4.31816 14.6667 8.00016 14.6667Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 7.99996L7.33333 9.33329L10 6.66663"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_890_13932">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default VerifiedIcon;
