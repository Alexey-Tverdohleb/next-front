import { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';

import { CANCELED_STATUS, OPEN_STATUS, STATUS_OPTIONS } from '@/app/[locale]/my-trades/constants';
import { IExpandElement } from '@/app/[locale]/my-trades/_tables/MyTradesTable/types';
import { TOption } from '@/types/common';
import Dropdown from '@/components/Dropdown';
import StatusModal from '@/app/[locale]/my-trades/_components/StatusModal';
import useToggle from '@/hooks/useToggle/useToggle';

const ExpandElement: FC<IExpandElement> = ({ row }) => {
  const t = useTranslations('MyTradesPage.tables');

  const [status, setStatus] = useState<TOption | undefined>(OPEN_STATUS);

  const isDisabled = status?.value === CANCELED_STATUS.value;

  const [isShow, toggleShow] = useToggle({ initial: false });

  // TODO: handle change status
  const handleConfirm = () => {
    setStatus(CANCELED_STATUS);
    toggleShow();
  };

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
      <div className="flex items-center justify-between mb-sm">
        <div className="font-[500] text-xs">{t('statusHeader')}</div>
        <div className="font-[600] text-sm">
          <Dropdown
            value={status}
            classNameContainer="h-[24px] max-w-[100px]"
            isDisabled={isDisabled}
            onSelect={toggleShow}
            options={STATUS_OPTIONS}
          />
          <StatusModal toggleShow={toggleShow} handleConfirm={handleConfirm} isShow={isShow} />
        </div>
      </div>
    </div>
  );
};

export default ExpandElement;
