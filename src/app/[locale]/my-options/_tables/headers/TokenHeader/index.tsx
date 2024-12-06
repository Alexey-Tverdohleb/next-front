import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { THeaderCell } from '@/app/[locale]/my-options/_tables/headers/types';
import LeftAlignCell from '@/components/Table/LeftAlignCell';

const TokenHeader: FC<THeaderCell> = () => {
  const t = useTranslations('MyOptionsPage.optionsHistoryTab');

  return (
    <LeftAlignCell>
      <span>{t('tokenHeader')}</span>
    </LeftAlignCell>
  );
};

export default TokenHeader;
