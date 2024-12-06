import { ReactNode, ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type ButtonType = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'disabled'
>;

export interface IProps extends ButtonType {
  label: string;
  isDisabled?: boolean;
  icon?: ReactNode;
}
