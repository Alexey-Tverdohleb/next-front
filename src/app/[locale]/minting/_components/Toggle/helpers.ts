import { IFlexDirections } from '@/components/Toggle/types';

export const flexDirection: IFlexDirections = {
  top: 'flex-col',
  left: 'flex-row',
  right: 'flex-row-reverse',
  bottom: 'flex-col-reverse',
};

export const getFlexClass = (position: keyof IFlexDirections): string => {
  const direction = flexDirection[position] ?? flexDirection.left;

  return `flex items-center ${direction}`;
};
