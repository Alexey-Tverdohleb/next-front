import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { THeaderCell } from '@/app/[locale]/my-options/_tables/headers/types';
import RightAlignCell from '@/components/Table/RightAlignCell';

const AmountHeader: FC<THeaderCell> = () => {
  const t = useTranslations('MyOptionsPage.optionsHistoryTab');

  return (
    <RightAlignCell>
      <span>{t('amountHeader')}</span>
    </RightAlignCell>
  );
};

export default AmountHeader;
