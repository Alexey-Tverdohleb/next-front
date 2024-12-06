import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { TIcon } from '@/types/common';

const EllipsisIcon: FC<TIcon> = ({ className }) => {
  return (
    <svg
      className={twMerge(className)}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8.00001 8.66683C8.3682 8.66683 8.66668 8.36835 8.66668 8.00016C8.66668 7.63197 8.3682 7.3335 8.00001 7.3335C7.63182 7.3335 7.33334 7.63197 7.33334 8.00016C7.33334 8.36835 7.63182 8.66683 8.00001 8.66683Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6667 8.66683C13.0349 8.66683 13.3333 8.36835 13.3333 8.00016C13.3333 7.63197 13.0349 7.3335 12.6667 7.3335C12.2985 7.3335 12 7.63197 12 8.00016C12 8.36835 12.2985 8.66683 12.6667 8.66683Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33332 8.66683C3.70151 8.66683 3.99999 8.36835 3.99999 8.00016C3.99999 7.63197 3.70151 7.3335 3.33332 7.3335C2.96513 7.3335 2.66666 7.63197 2.66666 8.00016C2.66666 8.36835 2.96513 8.66683 3.33332 8.66683Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EllipsisIcon;
