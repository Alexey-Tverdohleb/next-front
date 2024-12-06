import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { TIcon } from '@/types/common';

const IncreaseIcon: FC<TIcon> = ({ className }) => {
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
        d="M3.97706 26.375L0 22.3979L12.0543 10.3427L17.6793 15.9677L24.1741 9.47112L22.2716 7.56956L32 5.625L30.0554 15.3497L28.1511 13.4482L17.6793 23.9218L12.0543 18.2968L3.97706 26.375Z"
        fill="#8CD96B"
      />
      <path
        d="M24.1741 9.47112L17.6793 15.9677L15.9911 14.2795V22.2336L17.6793 23.9218L28.1511 13.4482L30.0554 15.3497L32 5.625L22.2716 7.56956L24.1741 9.47112Z"
        fill="#22C55E"
      />
    </svg>
  );
};

export default IncreaseIcon;
