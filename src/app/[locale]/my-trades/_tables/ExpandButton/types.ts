import { Row } from '@tanstack/table-core';

import { IExpandTable } from '@/app/[locale]/my-options/_tables/types';
import { IToken } from '@/types/token';

export interface IProps {
  className?: string;
  row: Row<IToken>;
  table: IExpandTable;
}
