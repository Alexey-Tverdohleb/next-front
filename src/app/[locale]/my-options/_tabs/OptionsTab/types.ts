import { IToken } from '@/types/token';
import { TOption } from '@/types/common';

export interface IProps {}

export type TExpiredDateRange = {
  startDate?: Date;
  endDate?: Date;
};

export type TFilters = {
  expiredDateRange: TExpiredDateRange;
  tokenName: string;
};

export type THandleApplyFilters = (filters?: TFilters) => void;

export interface IFilters {}

export interface ICardHeaderProps {}

export interface IUseURLFilters {
  handleApplyFilters: THandleApplyFilters;
  filteredData: IToken[];
  filters: TFilters;
}

export interface ISheetContent {
  toggleOpen: () => void;
}

export interface ITypeFilter {
  className?: string;
  options: TOption[];
  type: string | number;
  setType: (value: string) => void;
}

export interface IDropdown {}

export interface IDropdownContent {
  toggleOpen: () => void;
}
