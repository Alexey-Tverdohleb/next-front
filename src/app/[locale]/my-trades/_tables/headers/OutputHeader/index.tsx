import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { THeaderCell } from '@/app/[locale]/my-trades/_tables/headers/types';
import RightAlignCell from '@/components/Table/RightAlignCell';

const OutputHeader: FC<THeaderCell> = () => {
  const t = useTranslations('MyTradesPage.tables');

  return (
    <RightAlignCell>
      <span>{t('outputHeader')}</span>
    </RightAlignCell>
  );
};

export default OutputHeader;
