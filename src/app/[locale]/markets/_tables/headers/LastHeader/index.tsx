import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { THeaderCell } from '@/app/[locale]/markets/_tables/types';
import RightAlignCell from '@/components/Table/RightAlignCell';

const LastHeader: FC<THeaderCell> = () => {
  const t = useTranslations('MarketsPage.marketTable');

  return (
    <RightAlignCell>
      <div className="whitespace-nowrap pr-[40px]">{t('lastHeader')}</div>
    </RightAlignCell>
  );
};

export default LastHeader;
