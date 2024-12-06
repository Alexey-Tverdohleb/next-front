import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import { IExpandElementProps } from '@/app/[locale]/my-options/_tables/OptionsTable/types';
import Badge from '@/components/Badge';

const ExpandElement: FC<IExpandElementProps> = ({ row }) => {
  const t = useTranslations('MyOptionsPage.optionsHistoryTab');

  return (
    <div
      className={twMerge(
        'bg-secondary-blue dark:bg-dark-500 desktop:text-md',
        'text-primary dark:text-dark-white',
        'p-sm'
      )}
    >
      <div className="flex items-center justify-between mb-sm">
        <div className="font-[500] text-xs">{t('amountHeader')}</div>
        <div className="font-[600] text-sm">{row.original.price.askPrice}</div>
      </div>
      <div className="flex items-center justify-between mb-sm">
        <div className="font-[500] text-xs">{t('issueDateHeader')}</div>
        <div className="font-[600] text-sm">{row.original.price.askPrice}</div>
      </div>
      <div className="flex items-center justify-between mb-sm">
        <div className="font-[500] text-xs">{t('redeemDateHeader')}</div>
        <div className="font-[600] text-sm">{row.original.price.askPrice}</div>
      </div>
      <div className="flex items-center justify-between mb-sm">
        <div className="font-[500] text-xs">{t('expiredDateHeader')}</div>
        <div className="font-[600] text-sm">{row.original.price.askPrice}</div>
      </div>
      <div className="flex items-center justify-between mb-sm">
        <div className="font-[500] text-xs">{t('actionsHeader')}</div>
        <div className="font-[600] text-sm flex items-center">
          <Badge className="ml-xxs" label="Cancelled" />
          <Badge className="ml-xxs" label="Expired" />
        </div>
      </div>
    </div>
  );
};

export default ExpandElement;
