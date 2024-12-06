import { FC } from 'react';

export type TIcon = {
  className?: string;
};

export type TOption = {
  value: string | number;
  label: string;
  Icon?: FC<TIcon>;
};

export type TChartData = {
  x: number;
  y: number;
};
