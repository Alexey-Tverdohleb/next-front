import { TOption } from '@/types/common';

export interface IProps {
  label: string;
  className?: string;
  inputLabel?: string;
  options: TOption[];
  name: string;
}
