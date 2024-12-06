import { Row } from '@tanstack/table-core';

import { ITokenPrice, IToken } from '@/types/token';
import { IExpandTable } from '@/app/[locale]/my-options/_tables/types';

export interface IProps {
  getValue: () => ITokenPrice;
  row: Row<IToken>;
  table: IExpandTable;
}
