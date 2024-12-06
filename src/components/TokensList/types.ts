import { ICategory, IToken } from '@/types/token';

export interface IProps {
  tokens?: IToken[];
  handleSelect?: (token: IToken) => void;
  categories?: ICategory;
  selectedTokenName?: string;
  badgeClassName?: string;
  className?: string;
  selectedClassName?: string;
  itemClassName?: string;
}
