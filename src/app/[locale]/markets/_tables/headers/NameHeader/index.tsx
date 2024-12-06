import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { THeaderCell } from '@/app/[locale]/markets/_tables/types';
import LeftAlignCell from '@/components/Table/LeftAlignCell';

const NameHeader: FC<THeaderCell> = () => {
  const t = useTranslations('MarketsPage.marketTable');

  return (
    <LeftAlignCell>
      <div className="whitespace-nowrap">{t('nameHeader')}</div>
    </LeftAlignCell>
  );
};

export default NameHeader;
