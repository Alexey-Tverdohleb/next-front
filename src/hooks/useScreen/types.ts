import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
}

export interface IContext {
  isDesktop: boolean;
}
