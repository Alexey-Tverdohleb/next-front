import { TOption } from '@/types/common';

export interface IMobileSelect {
  className?: string;
  options: TOption[];
  value: string | number;
  setValue: (value: string) => void;
}
