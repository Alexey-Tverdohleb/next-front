export interface IProps {
  toggleOpen: () => void;
  className?: string;
  isExpanded: boolean;
  handleSearch: (search: string) => void;
  defaultValue?: string;
}
