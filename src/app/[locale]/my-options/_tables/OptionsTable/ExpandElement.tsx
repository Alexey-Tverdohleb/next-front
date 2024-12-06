import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import { TOption } from '@/types/common';
import { IExpandElementProps } from '@/app/[locale]/my-options/_tables/OptionsTable/types';
import { ACTION_OPTIONS } from '@/app/[locale]/my-options/_tables/constants';
import Dropdown from '@/components/Dropdown';

const ExpandElement: FC<IExpandElementProps> = ({ row }) => {
  const t = useTranslations('MyOptionsPage.openOptionsTab.myOptions');

  const [value, setValue] = useState<TOption | undefined>(undefined);

  return (
    <div
      className={twMerge(
        'bg-secondary-blue dark:bg-dark-500 desktop:text-md text-sm font-[500]',
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
        <div className="font-[500] text-xs">{t('expiredDateHeader')}</div>
        <div className="font-[600] text-sm">{row.original.price.askPrice}</div>
      </div>
      <div className="flex items-center justify-between mb-sm">
        <div className="font-[500] text-xs">{t('actionsHeader')}</div>
        <Dropdown
          classNameContainer="h-[24px] max-w-[160px]"
          value={value}
          onSelect={setValue}
          options={ACTION_OPTIONS}
        />
      </div>
    </div>
  );
};

export default ExpandElement;
