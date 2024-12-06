export interface IProps {
  name: string;
  label?: string;
  labelPosition: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
}

export type FlexDirections = 'flex-row' | 'flex-col' | 'flex-row-reverse' | 'flex-col-reverse';

export interface IFlexDirections {
  left: FlexDirections;
  top: FlexDirections;
  right: FlexDirections;
  bottom: FlexDirections;
}
