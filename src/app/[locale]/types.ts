import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export interface IMainLayout {
  children: ReactNode;
}
