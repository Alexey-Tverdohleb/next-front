export interface IExpandSearch {
  toggleOpen: () => void;
  className?: string;
  isExpanded: boolean;
  handleSearch: (search: string) => void;
  defaultValue?: string;
  placeholder: string;
}
