import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}
