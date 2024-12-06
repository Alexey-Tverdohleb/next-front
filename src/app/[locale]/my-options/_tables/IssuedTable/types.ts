import { Row } from '@tanstack/table-core';

import { IToken } from '@/types/token';

export interface IProps {
  data?: IToken[];
}

export interface IExpandElementProps {
  row: Row<IToken>;
}
