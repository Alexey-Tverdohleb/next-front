import { FC } from 'react';
import { useTranslations } from 'next-intl';

import RightAlignCell from '@/components/Table/RightAlignCell';
import { THeaderCell } from '@/app/[locale]/my-options/_tables/headers/types';

const ActionHeader: FC<THeaderCell> = () => {
  const t = useTranslations('MyOptionsPage.optionsHistoryTab');

  return (
    <RightAlignCell>
      <span>{t('actionsHeader')}</span>
    </RightAlignCell>
  );
};

export default ActionHeader;
