import { TOption } from '@/types/common';

export interface IProps {
  classNameContainer?: string;
  classNameList?: string;
  placeholder?: string;
  options?: TOption[];
  value?: TOption;
  onSelect?: (option: TOption) => void;
  isDisabled?: boolean;
}
