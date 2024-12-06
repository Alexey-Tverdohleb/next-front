import { MouseEvent } from 'react';

export interface IProps {
  className?: string;
  onClick?: (e: MouseEvent) => void;
}
