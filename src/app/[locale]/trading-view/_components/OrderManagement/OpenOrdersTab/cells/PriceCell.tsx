import { useState } from 'react';
import { Getter, Row } from '@tanstack/table-core';
import { useEditableRowsList } from '@/store/hooks/openOrderTable';
import { OpenOrderType } from '@/app/[locale]/trading-view/_components/OrderManagement/OpenOrdersTab/columns';

type PriceCellProps = {
  getValue: Getter<string>;
  row: Row<OpenOrderType>;
};

export default function PriceCell({ getValue, row }: PriceCellProps) {
  const [priceValue, setPriceValue] = useState(() => getValue());
  const editableRowsList = useEditableRowsList();

  if (editableRowsList.includes(row.id)) {
    return (
      <input
        value={priceValue}
        onChange={(event) => setPriceValue(event.target.value)}
        className="w-full rounded-lg border border-gray-divider px-4 py-3 text-md text-gray-divider dark:border-dark-200 dark:bg-dark-300 dark:text-dark-200"
      />
    );
  }

  return <span>{getValue()}</span>;
}
