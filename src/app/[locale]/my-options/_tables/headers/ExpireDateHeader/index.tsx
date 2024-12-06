import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { THeaderCell } from '@/app/[locale]/my-options/_tables/headers/types';
import RightAlignCell from '@/components/Table/RightAlignCell';
import SortableHeader from '@/app/[locale]/my-options/_tables/components/SortableHeader';

const ExpireDateHeader: FC<THeaderCell> = ({ header }) => {
  const t = useTranslations('MyOptionsPage.optionsHistoryTab');

  return (
    <RightAlignCell>
      <SortableHeader header={header}>
        <span>{t('expiredDateHeader')}</span>
      </SortableHeader>
    </RightAlignCell>
  );
};

export default ExpireDateHeader;
