import { ReactNode } from 'react';

export interface IProps {
  className?: string;
  popupClassName?: string;
  label?: string;
  children: ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
  currentValue?: string;
  onClear?: () => void;
}
