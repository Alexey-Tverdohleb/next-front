import { Row } from '@tanstack/table-core';
import { useTranslations } from 'next-intl';
import { useEditableRowsList, useOnEditPrice } from '@/store/hooks/openOrderTable';
import { OpenOrderType } from '@/app/[locale]/trading-view/_components/OrderManagement/OpenOrdersTab/columns';

export default function ActionCell({ row }: { row: Row<OpenOrderType> }) {
  const t = useTranslations('OpenOrdersTable');
  const editableRowsList = useEditableRowsList();
  const onEditPrice = useOnEditPrice();

  if (editableRowsList.includes(row.id)) {
    return (
      <button
        className="rounded bg-secondary-blue px-3 py-2 text-xs font-semibold text-primary-blue dark:bg-blue-500 dark:text-white"
        onClick={() => onEditPrice(row.id)}
      >
        {t('confirmButton')}
      </button>
    );
  }

  return (
    <button
      className="px-3 py-2 text-xs font-semibold text-primary dark:rounded dark:bg-dark-300 dark:text-dark-white"
      onClick={() => onEditPrice(row.id)}
    >
      {t('cancelButton')}
    </button>
  );
}
