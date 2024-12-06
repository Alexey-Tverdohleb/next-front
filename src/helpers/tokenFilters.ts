import { IToken } from '@/types/token';

export const filterName = (token: IToken, value: string): boolean => {
  if (!value.trim()) return true;

  return token.info.symbol.toLowerCase().includes(value.trim().toLowerCase());
};

export const filterVerified = (token: IToken, value: boolean): boolean => {
  if (!value) return true;

  return token.info.status === 'verified';
};
