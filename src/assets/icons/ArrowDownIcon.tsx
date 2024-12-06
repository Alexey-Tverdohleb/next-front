import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { TIcon } from '@/types/common';

const ArrowDownIcon: FC<TIcon> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      className={twMerge(className)}
    >
      <path d="M6 3V10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M2.5 6.5L6 10L9.5 6.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownIcon;
