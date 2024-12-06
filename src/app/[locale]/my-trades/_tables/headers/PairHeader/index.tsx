import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { THeaderCell } from '@/app/[locale]/my-trades/_tables/headers/types';
import LefAlignCell from '@/components/Table/LeftAlignCell';

const PairHeader: FC<THeaderCell> = () => {
  const t = useTranslations('MyTradesPage.tables');

  return (
    <LefAlignCell>
      <span>{t('pairHeader')}</span>
    </LefAlignCell>
  );
};

export default PairHeader;
