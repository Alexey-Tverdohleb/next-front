import { ITokenInfo } from '@/types/token';

export interface ICell {
  getValue: () => ITokenInfo;
}
