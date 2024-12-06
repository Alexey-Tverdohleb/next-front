import { ITokenPrice } from '@/types/token';

export interface IProps {
  getValue: () => ITokenPrice;
}
