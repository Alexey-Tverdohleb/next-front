import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';

import { IExpandElement } from '@/app/[locale]/my-trades/_tables/PendingTable/types';
import NewLimitInput from '@/app/[locale]/my-trades/_components/NewLimitInput';
import NewLimitButton from '@/app/[locale]/my-trades/_components/NewLimitButton';

const ExpandElement: FC<IExpandElement> = ({ row }) => {
  const t = useTranslations('MyTradesPage.tables');

  return (
    <div
      className={twMerge(
        'bg-secondary-blue dark:bg-dark-500 desktop:text-md text-sm font-[500]',
        'text-primary dark:text-dark-white',
        'p-sm'
      )}
    >
      <div className="flex items-center justify-between mb-sm">
        <div className="font-[500] text-xs">{t('inputHeader')}</div>
        <div className="font-[600] text-sm">{row.original.price.askPrice}</div>
      </div>
      <div className="flex items-center justify-between mb-sm">
        <div className="font-[500] text-xs">{t('outputHeader')}</div>
        <div className="font-[600] text-sm">{row.original.price.askPrice}</div>
      </div>
      <div className="font-[500] text-xs mb-sm">{t('limitPriceHeader')}</div>
      <div className="font-[600] text-sm mb-sm flex items-center justify-between">
        <NewLimitInput className="mr-sm" value={row.original.price.askPrice} />
        <NewLimitButton />
      </div>
    </div>
  );
};

export default ExpandElement;
