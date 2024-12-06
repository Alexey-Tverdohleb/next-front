import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { TIcon } from '@/types/common';

const SearchIcon: FC<TIcon> = ({ className }) => {
  return (
    <svg
      className={twMerge(className)}
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
    >
      <path
        d="M7.83333 12.6667C10.7789 12.6667 13.1667 10.2789 13.1667 7.33333C13.1667 4.38781 10.7789 2 7.83333 2C4.88781 2 2.5 4.38781 2.5 7.33333C2.5 10.2789 4.88781 12.6667 7.83333 12.6667Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5001 14.0001L11.6001 11.1001"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
