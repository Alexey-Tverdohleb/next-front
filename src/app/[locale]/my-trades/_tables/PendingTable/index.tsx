import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';

import { IPendingTable } from '@/app/[locale]/my-trades/_tables/PendingTable/types';
import Table from '@/components/Table';
import useScreen from '@/hooks/useScreen';
import useColumn from '@/app/[locale]/my-trades/_tables/PendingTable/useColumn';
import ExpandElement from '@/app/[locale]/my-trades/_tables/PendingTable/ExpandElement';
import TradesLimitForm from '@/forms/TradesLimitForm';

const PendingTable: FC<IPendingTable> = ({ data = [], className }) => {
  const t = useTranslations('MyTradesPage.pendingTable');

  const { isDesktop } = useScreen();
  const columns = useColumn(isDesktop);

  return (
    <TradesLimitForm>
      <div className={twMerge(className)}>
        <div
          className={twMerge(
            'w-full',
            'px-xl py-sm mb-md',
            'bg-secondary-blue dark:bg-dark-300',
            'text-gray-secondary dark:text-dark-gray text-sm font-[500]',
            'rounded-[4px]'
          )}
        >
          {t('title')}
        </div>
        <Table data={data} columns={columns} ExpandElement={ExpandElement} />
      </div>
    </TradesLimitForm>
  );
};

export default PendingTable;
