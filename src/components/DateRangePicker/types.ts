import { Range, RangeKeyDict } from 'react-date-range';

export interface IProps {
  className?: string;
  handleSelection: (ranges: RangeKeyDict) => void;
  ranges: Range[];
}

export interface IRangeFooter {
  ranges: Range[];
}
