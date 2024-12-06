import { ITokenPrice } from '@/types/token';

export interface IVolumeCell {
  getValue: () => ITokenPrice;
}
