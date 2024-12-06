import { FC } from 'react';
import { useTranslations } from 'next-intl';

import RightAlignCell from '@/components/Table/RightAlignCell';
import { THeaderCell } from '@/app/[locale]/my-options/_tables/headers/types';

const StatusHeader: FC<THeaderCell> = () => {
  const t = useTranslations('MyOptionsPage.openOptionsTab.issuedOptions');

  return (
    <RightAlignCell>
      <span>{t('statusHeader')}</span>
    </RightAlignCell>
  );
};

export default StatusHeader;
