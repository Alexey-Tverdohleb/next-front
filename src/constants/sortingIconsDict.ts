import { FC } from 'react';

import { TIcon } from '@/types/common';
import UpIcon from '@/assets/icons/UpIcon';
import DownIcon from '@/assets/icons/DownIcon';
import UpDownIcon from '@/assets/icons/UpDownIcon';

export type TSortingIconDict = {
  asc: FC<TIcon>;
  desc: FC<TIcon>;
};

export const SORTING_ICONS: TSortingIconDict = {
  asc: UpIcon,
  desc: DownIcon,
};

export const getSortingIcon = (sorting: keyof TSortingIconDict) =>
  SORTING_ICONS[sorting] ?? UpDownIcon;
