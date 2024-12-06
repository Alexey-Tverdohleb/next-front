import { FC } from 'react';

import { IFilters } from '@/app/[locale]/my-options/_tabs/OptionsTab/types';
import useScreen from '@/hooks/useScreen';
import DesktopFilters from '@/app/[locale]/my-options/_tabs/OptionsTab/IssuedOptionsFilters/Desktop';
import MobileFilters from '@/app/[locale]/my-options/_tabs/OptionsTab/IssuedOptionsFilters/Mobile';
import { useTranslations } from 'next-intl';

const Filters: FC<IFilters> = () => {
  const { isDesktop } = useScreen();

  const FiltersElement = isDesktop ? DesktopFilters : MobileFilters;

  const t = useTranslations('MyOptionsPage.openOptionsTab.issuedOptions');

  return (
    <div className="mb-xl flex items-center justify-between">
      <h2 className="text-primary dark:text-dark-white desktop:text-xl text-lg font-[600]">
        {t('title')}
      </h2>
      <FiltersElement />
    </div>
  );
};

export default Filters;
