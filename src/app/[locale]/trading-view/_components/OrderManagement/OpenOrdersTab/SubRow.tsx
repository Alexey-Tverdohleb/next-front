import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';
import { Row } from '@tanstack/table-core';
import { OpenOrderType } from '@/app/[locale]/trading-view/_components/OrderManagement/OpenOrdersTab/columns';

type SubRowProps = {
  row: Row<OpenOrderType>;
};

const CONTAINER_CLASS_NAME = 'flex items-center justify-between';
const TITLE_CLASS_NAME = 'text-xs font-medium text-primary dark:text-dark-white';
const VALUE_CLASS_NAME = 'text-sm font-semibold text-primary dark:text-dark-white';

export default function SubRow({ row }: SubRowProps) {
  const t = useTranslations('OpenOrdersTable');
  const [isCancelled, setIsCancelled] = useState(false);
  const [priceValue, setPriceValue] = useState<string>(() => row.original.price.toString());

  const { price, amount, filled } = row.original;
  return (
    <div className="flex flex-col gap-y-2">
      <div className={twMerge(CONTAINER_CLASS_NAME, isCancelled && 'flex-col items-start')}>
        <span className={TITLE_CLASS_NAME}>{t('price')}</span>
        {!isCancelled && <span className={VALUE_CLASS_NAME}>{price}</span>}
        {isCancelled && (
          <div className="flex w-full gap-x-2">
            <input
              value={priceValue}
              onChange={(event) => setPriceValue(event.target.value)}
              className="w-full rounded-lg border border-gray-divider px-4 py-3 text-md text-gray-divider dark:border-dark-200 dark:bg-dark-300 dark:text-dark-200"
            />
            <button
              className="rounded px-3 py-2 text-xs font-semibold text-primary-blue dark:bg-dark-300 dark:text-dark-white"
              onClick={() => setIsCancelled(false)}
            >
              {t('confirmButton')}
            </button>
          </div>
        )}
      </div>
      <div className={CONTAINER_CLASS_NAME}>
        <span className={TITLE_CLASS_NAME}>{t('amount')}</span>
        <span className={VALUE_CLASS_NAME}>{amount}</span>
      </div>
      <div className={CONTAINER_CLASS_NAME}>
        <span className={TITLE_CLASS_NAME}>{t('filled')}</span>
        <span className={VALUE_CLASS_NAME}>{filled}</span>
      </div>
      <div className={CONTAINER_CLASS_NAME}>
        <span
          className={twMerge(
            'py-2 text-xs font-medium',
            isCancelled ? 'text-gray dark:text-dark-200' : 'text-primary dark:text-dark-white'
          )}
        >
          {t('action')}
        </span>
        {!isCancelled && (
          <button
            className="rounded px-3 py-2 text-xs font-semibold text-primary-blue dark:bg-dark-300 dark:text-dark-white"
            onClick={() => setIsCancelled(true)}
          >
            {t('cancelButton')}
          </button>
        )}
      </div>
    </div>
  );
}
