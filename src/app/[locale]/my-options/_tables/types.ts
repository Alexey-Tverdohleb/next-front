import { Table, TableOptionsResolved } from '@tanstack/table-core';
import { IToken } from '@/types/token';

export interface IExpandMeta {
  handleExpand: () => void;
  expandedRow: string;
}

export interface ExpandTableOptions extends TableOptionsResolved<IToken> {
  meta: IExpandMeta;
}

export interface IExpandTable extends Table<IToken> {
  options: ExpandTableOptions;
}
