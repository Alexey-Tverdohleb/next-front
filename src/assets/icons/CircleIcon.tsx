import { FC } from 'react';

import { TIcon } from '@/types/common';

const CircleIcon: FC<TIcon> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="60" viewBox="0 0 52 60" fill="none">
      <g filter="url(#filter0_dd_407_109697)">
        <circle cx="26" cy="28" r="12" fill="white" />
        <circle cx="26" cy="28" r="11.5" stroke="#E3E8EC" />
      </g>
      <defs>
        <filter
          id="filter0_dd_407_109697"
          x="0"
          y="0"
          width="52"
          height="60"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="6" />
          <feGaussianBlur stdDeviation="7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.07 0 0 0 0 0.203815 0 0 0 0 0.466667 0 0 0 0.15 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_407_109697" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0705882 0 0 0 0 0.203922 0 0 0 0 0.466667 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_407_109697"
            result="effect2_dropShadow_407_109697"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_407_109697"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CircleIcon;
