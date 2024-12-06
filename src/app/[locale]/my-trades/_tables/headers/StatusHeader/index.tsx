import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { THeaderCell } from '@/app/[locale]/my-trades/_tables/headers/types';
import RightAlignCell from '@/components/Table/RightAlignCell';

const StatusHeader: FC<THeaderCell> = () => {
  const t = useTranslations('MyTradesPage.tables');

  return (
    <RightAlignCell>
      <span>{t('statusHeader')}</span>
    </RightAlignCell>
  );
};

export default StatusHeader;
