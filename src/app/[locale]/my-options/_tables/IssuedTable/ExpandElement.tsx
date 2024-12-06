import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import { IExpandElementProps } from '@/app/[locale]/my-options/_tables/OptionsTable/types';
import { TOption } from '@/types/common';

import {
  CANCELED_STATUS,
  OPEN_STATUS,
  STATUS_OPTIONS,
} from '@/app/[locale]/my-options/_tables/constants';

import Dropdown from '@/components/Dropdown';
import StatusConfirmModal from '@/app/[locale]/my-options/_components/StatusConfirmModal';
import useToggle from '@/hooks/useToggle/useToggle';

const ExpandElement: FC<IExpandElementProps> = ({ row }) => {
  const t = useTranslations('MyOptionsPage.openOptionsTab.issuedOptions');

  const [statusValue, setStatusValue] = useState<TOption | undefined>(OPEN_STATUS);

  const [isShow, toggleShow] = useToggle({ initial: false });

  // TODO: to manage cancel status action
  const handleConfirm = () => {
    setStatusValue(CANCELED_STATUS);
    toggleShow();
  };

  const isDisabled = statusValue?.value === CANCELED_STATUS.value;

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
        <div className="font-[500] text-xs">{t('statusHeader')}</div>
        <Dropdown
          isDisabled={isDisabled}
          classNameContainer="h-[24px] max-w-[100px]"
          options={STATUS_OPTIONS}
          value={statusValue}
          onSelect={toggleShow}
        />
        <StatusConfirmModal toggleShow={toggleShow} handleConfirm={handleConfirm} isShow={isShow} />
      </div>
    </div>
  );
};

export default ExpandElement;
