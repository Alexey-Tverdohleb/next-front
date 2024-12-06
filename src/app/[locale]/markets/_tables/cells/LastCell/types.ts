import { ITokenPrice } from '@/types/token';

export interface ILastCell {
  getValue: () => ITokenPrice;
  withRightIcon?: boolean;
}
