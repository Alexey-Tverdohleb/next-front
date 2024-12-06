import { Row } from '@tanstack/table-core';

import { IToken, ITokenPrice } from '@/types/token';
import { IExpandTable } from '@/app/[locale]/my-options/_tables/types';

export interface ICell {
  getValue: () => ITokenPrice;
  row: Row<IToken>;
  table: IExpandTable;
}
