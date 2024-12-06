import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  isShown: boolean;
  onClose: () => void;
}
