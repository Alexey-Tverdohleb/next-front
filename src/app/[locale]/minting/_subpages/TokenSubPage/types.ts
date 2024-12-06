import { IToken } from '@/types/token';

export interface IProps {
  toggleSubPage?: () => void;
}

export interface ICardHeader {
  toggleSubPage?: () => void;
  title: string;
}

export type TFiltersValue = {
  tokenName: string;
  tokenVerified: boolean;
};

export interface ICardFilters {
  handleToggle: (value: boolean) => void;
  handleSearch: (value: string) => void;
  filtersValue: TFiltersValue;
}

export interface IUseURLFilters {
  filteredTokens: IToken[];
  handleSearch: (value: string) => void;
  handleToggle: (value: boolean) => void;
  filtersValue: TFiltersValue;
}
