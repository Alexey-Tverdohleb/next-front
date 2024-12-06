import { FC } from 'react';
import { useTranslations } from 'next-intl';

import LeftAlignCell from '@/components/Table/LeftAlignCell';
import { THeaderCell } from '@/app/[locale]/my-options/_tables/headers/types';

const TypeHeader: FC<THeaderCell> = () => {
  const t = useTranslations('MyOptionsPage.optionsHistoryTab');

  return (
    <LeftAlignCell>
      <span>{t('typeHeader')}</span>
    </LeftAlignCell>
  );
};

export default TypeHeader;
