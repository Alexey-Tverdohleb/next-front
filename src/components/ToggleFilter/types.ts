export interface IToggleFilter {
  label?: string;
  className?: string;
  value: boolean;
  onToggle: (newValue: boolean) => void;
}
