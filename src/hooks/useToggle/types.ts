import { ComponentState } from 'react';

export interface IToggle {
  initial?: boolean;
  onChange?: (prevState: boolean) => void;
}

export type Toggle = (props: IToggle) => ComponentState;
