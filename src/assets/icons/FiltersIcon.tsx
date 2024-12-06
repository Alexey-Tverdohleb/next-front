import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { TIcon } from '@/types/common';

const FiltersIcon: FC<TIcon> = ({ className }) => {
  return (
    <svg
      className={twMerge(className)}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M20 7.5H11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 17.5H5"
        stroke="#8A9CA9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 20.5C18.6569 20.5 20 19.1569 20 17.5C20 15.8431 18.6569 14.5 17 14.5C15.3431 14.5 14 15.8431 14 17.5C14 19.1569 15.3431 20.5 17 20.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10.5C8.65685 10.5 10 9.15685 10 7.5C10 5.84315 8.65685 4.5 7 4.5C5.34315 4.5 4 5.84315 4 7.5C4 9.15685 5.34315 10.5 7 10.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FiltersIcon;
