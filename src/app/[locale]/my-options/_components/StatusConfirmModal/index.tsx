import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';

import Modal from '@/components/Modal';
import Card from '@/app/[locale]/minting/_components/Card';
import { IProps } from '@/app/[locale]/my-options/_components/StatusConfirmModal/types';

const StatusConfirmModal: FC<IProps> = ({ isShow, handleConfirm, toggleShow }) => {
  const t = useTranslations('MyOptionsPage.openOptionsTab.issuedOptions.confirmModal');

  return (
    <Modal isShown={isShow} onClose={toggleShow}>
      <Card className="min-w-[300px]">
        <h3 className="mb-md text-center desktop:text-xxl text-lg font-[700]">{t('heading')}</h3>
        <div className="mb-xl">
          <p className="desktop:text-xmd text-sm font-[500]">{t('text1')}</p>
          <p className="desktop:text-xmd text-sm font-[500]">{t('text2')}</p>
        </div>
        <div className="grid grid-cols-2 items-center justify-between">
          <button
            type="button"
            onClick={toggleShow}
            className={twMerge('mr-md px-xl py-sm', 'bg-blue-500', 'rounded-[8px]')}
          >
            <span className="text-white desktop:text-xmd text-sm font-[600]">{t('no')}</span>
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className={twMerge(
              'px-xl py-sm',
              'bg-secondary-blue dark:bg-dark-300',
              'rounded-[8px]'
            )}
          >
            <span className="text-blue-500 dark:text-dark-white desktop:text-xmd text-sm font-[600]">
              {t('yes')}
            </span>
          </button>
        </div>
      </Card>
    </Modal>
  );
};

export default StatusConfirmModal;
