export interface IProps {
  value?: boolean;
  label?: string;
  onToggle?: (value: boolean) => void;
  labelPosition: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
}
