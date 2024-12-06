import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { THeaderCell } from '@/app/[locale]/my-trades/_tables/headers/types';
import RightAlignCell from '@/components/Table/RightAlignCell';

const InputHeader: FC<THeaderCell> = () => {
  const t = useTranslations('MyTradesPage.tables');

  return (
    <RightAlignCell>
      <span>{t('inputHeader')}</span>
    </RightAlignCell>
  );
};

export default InputHeader;
