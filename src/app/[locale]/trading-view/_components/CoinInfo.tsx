import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';

const TITLE_CLASS_NAME =
  'text-xs font-medium text-gray-secondary dark:text-dark-gray desktop:text-sm';
const VALUE_CLASS_NAME =
  'text-[10px] font-medium text-primary dark:text-dark-white desktop:text-md';

export default function CoinInfo() {
  const t = useTranslations('CoinInfo');

  return (
    <div
      className={twMerge(
        'flex w-full items-center justify-between gap-x-2 rounded-xl border border-gray-divider bg-white p-3',
        'dark:border-dark-300 dark:bg-dark-400',
        'desktop:justify-start desktop:gap-x-6 desktop:border-none desktop:p-0'
      )}
    >
      <div className="flex flex-1 flex-col desktop:flex-grow-0">
        <p className="mb-1 text-xs font-medium text-gray-secondary dark:text-dark-gray desktop:hidden">
          {t('price')}
        </p>
        <p className="text-xl font-semibold text-primary dark:text-dark-white desktop:text-xl">
          0.29456
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 desktop:grid-cols-4 desktop:grid-rows-1 desktop:gap-x-6">
        <div>
          <p className={TITLE_CLASS_NAME}>{t('optionType')}</p>
          <p className={VALUE_CLASS_NAME}>Call</p>
        </div>
        <div>
          <p className={TITLE_CLASS_NAME}>{t('expireDate')}</p>
          <p className={VALUE_CLASS_NAME}>12.12.2024</p>
        </div>
        <div>
          <p className={TITLE_CLASS_NAME}>{t('strikePrice', { coin: 'ADA' })}</p>
          <p className={VALUE_CLASS_NAME}>0.3451</p>
        </div>
        <div>
          <p className={TITLE_CLASS_NAME}>{t('volume', { coin: 'ADA' })}</p>
          <p className={VALUE_CLASS_NAME}>3,244.031</p>
        </div>
      </div>
    </div>
  );
}
