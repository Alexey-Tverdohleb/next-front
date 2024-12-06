import { ITokenPrice } from '@/types/token';

export interface IPriceCell {
  getValue: () => ITokenPrice;
}
