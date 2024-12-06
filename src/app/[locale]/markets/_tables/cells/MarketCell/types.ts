import { ITokenPrice } from '@/types/token';

export interface IMarketsCell {
  getValue: () => ITokenPrice;
}
