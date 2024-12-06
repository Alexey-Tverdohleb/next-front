import { ReactNode } from 'react';
import { IToken } from '@/types/token';

export interface IForm {
  children: ReactNode;
}

export interface IFormValues {
  typeOption: 'put' | 'full';
  strikePrice: string;
  amount: string;
  expireDate: string;
  token?: IToken;
}

export interface ISuccessModal {
  isShown: boolean;
  onClose: () => void;
}
