import { ITokenPrice } from '@/types/token';

export interface IWeekCell {
  getValue: () => ITokenPrice;
}
