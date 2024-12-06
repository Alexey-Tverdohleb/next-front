import { MouseEvent, ReactNode } from 'react';

export type OnSelectEvent = MouseEvent<HTMLButtonElement>;
type Tab = { id: number; element: ReactNode };

export interface IProps {
  tabs: Array<Tab>;
  activeTab: number;
  className?: string;
  onChange(selected: number, event: OnSelectEvent): void;
}
