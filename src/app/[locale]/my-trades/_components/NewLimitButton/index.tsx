import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';

import { IProps } from '@/app/[locale]/my-trades/_components/NewLimitButton/types';

const NewLimitButton: FC<IProps> = () => {
  const t = useTranslations('MyTradesPage.pendingTable');

  return (
    <button
      type="submit"
      className={twMerge(
        'bg-secondary-blue dark:bg-dark-300',
        'px-md py-sm',
        'whitespace-nowrap',
        'cursor-pointer',
        'rounded-[4px]',
        'text-xs font-[600] text-blue-500 dark:text-dark-white'
      )}
    >
      {t('newLimitButton')}
    </button>
  );
};

export default NewLimitButton;
