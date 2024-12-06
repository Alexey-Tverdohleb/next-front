import { TOption } from '@/types/common';
import { OpenStatusIcon } from '@/assets/icons/OpenStatusIcon';

export const OPEN_STATUS: TOption = {
  label: 'Open',
  value: 'open',
  Icon: OpenStatusIcon,
};

export const CANCELED_STATUS: TOption = {
  label: 'Cancel',
  value: 'cancel',
};

export const STATUS_OPTIONS: TOption[] = [CANCELED_STATUS];

export const ACTION_OPTIONS: TOption[] = [
  { label: 'Redeem', value: 'fullRedeem' },
  { label: 'Partially redeem', value: 'partRedeem' },
];
