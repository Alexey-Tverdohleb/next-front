import { Row } from '@tanstack/table-core';

import { IToken } from '@/types/token';

export interface IPendingTable {
  data?: IToken[];
  className?: string;
}

export interface IExpandElement {
  row: Row<IToken>;
}
