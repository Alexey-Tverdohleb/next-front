import { FC, ReactNode } from 'react';
import { ColumnDef, Row } from '@tanstack/table-core';

export interface IExpandElementProps<T> {
  row: Row<T>;
}

export interface IProps<T> {
  data: T[];
  columns: ColumnDef<T, unknown>[];
  ExpandElement?: FC<IExpandElementProps<T>>;
  paginated?: boolean;
  showSwipeTip?: boolean;
  onClick?: (row: Row<T>) => void;
}

export interface IAlignCell {
  children: ReactNode;
  title?: string;
}
