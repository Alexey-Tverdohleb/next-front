import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { THeaderCell } from '@/app/[locale]/markets/_tables/types';
import RightAlignCell from '@/components/Table/RightAlignCell';

const WeekHeader: FC<THeaderCell> = () => {
  const t = useTranslations('MarketsPage.marketTable');

  return (
    <RightAlignCell>
      <div className="whitespace-nowrap">{t('weekHeader')}</div>
    </RightAlignCell>
  );
};

export default WeekHeader;
