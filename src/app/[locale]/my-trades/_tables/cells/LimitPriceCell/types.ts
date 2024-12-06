import { ITokenPrice } from '@/types/token';

export interface ICell {
  getValue: () => ITokenPrice;
}
