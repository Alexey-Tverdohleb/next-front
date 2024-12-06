import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { TIcon } from '@/types/common';

const InfoIcon: FC<TIcon> = ({ className }) => {
  return (
    <svg
      className={twMerge(className)}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon/info" clipPath="url(#clip0_254_1226)">
        <path
          id="Vector"
          d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6818 14.6668 7.99992C14.6668 4.31802 11.6821 1.33325 8.00016 1.33325C4.31826 1.33325 1.3335 4.31802 1.3335 7.99992C1.3335 11.6818 4.31826 14.6666 8.00016 14.6666Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M8 10.6667V8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M8 5.33325H8.00667"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_254_1226">
          <rect width="16" height="16" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default InfoIcon;
