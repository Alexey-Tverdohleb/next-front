export interface IProps {
  name: string;
  label?: string;
  info?: string;
  type?: 'text' | 'number';
  disabled?: boolean;
  className?: string;
  inputLabel?: string;
  placeholder?: string;
  min?: number;
  max?: number;
}
