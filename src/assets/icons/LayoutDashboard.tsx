import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { TIcon } from '@/types/common';

const LayoutDashboard: FC<TIcon> = ({ className }) => {
  return (
    <svg
      className={twMerge(className)}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon/layout-dashboard">
        <path
          id="Vector"
          d="M10 3.5H3V12.5H10V3.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M21 3.5H14V8.5H21V3.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M21 12.5H14V21.5H21V12.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M10 16.5H3V21.5H10V16.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default LayoutDashboard;
