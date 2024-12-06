import '@tanstack/react-table';

declare module '@tanstack/react-table' {
  interface ColumnMeta {
    sticky?: boolean;
    headerClassName?: string;
    cellClassName?: string;
  }
}
