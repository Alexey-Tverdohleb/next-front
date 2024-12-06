import { ITokenPrice } from '@/types/token';

export interface IDayCell {
  getValue: () => ITokenPrice;
}
