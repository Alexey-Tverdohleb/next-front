import { Row } from '@tanstack/table-core';

import { IToken } from '@/types/token';

export interface IMyTradesTable {
  data?: IToken[];
}

export interface IExpandElement {
  row: Row<IToken>;
}
