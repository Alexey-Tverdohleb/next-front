import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { TIcon } from '@/types/common';

const DecreaseIcon: FC<TIcon> = ({ className }) => {
  return (
    <svg
      className={twMerge(className)}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M3.97706 5.625L0 9.60206L12.0543 21.6573L17.6793 16.0323L24.1741 22.5289L22.2716 24.4304L32 26.375L30.0554 16.6503L28.1511 18.5518L17.6793 8.07819L12.0543 13.7032L3.97706 5.625Z"
        fill="#F79292"
      />
      <path
        d="M24.1741 22.5289L17.6793 16.0323L15.9911 17.7205V9.76644L17.6793 8.07819L28.1512 18.5518L30.0555 16.6503L32 26.375L22.2717 24.4304L24.1741 22.5289Z"
        fill="#EF4444"
      />
    </svg>
  );
};

export default DecreaseIcon;
