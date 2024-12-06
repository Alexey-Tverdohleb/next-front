import { FC } from 'react';
import { useTranslations } from 'next-intl';

import RightAlignCell from '@/components/Table/RightAlignCell';
import { THeaderCell } from '@/app/[locale]/my-options/_tables/headers/types';

const StrikePriceHeader: FC<THeaderCell> = () => {
  const t = useTranslations('MyOptionsPage.optionsHistoryTab');

  return (
    <RightAlignCell>
      <span>{t('strikePriceHeader')}</span>
    </RightAlignCell>
  );
};

export default StrikePriceHeader;
