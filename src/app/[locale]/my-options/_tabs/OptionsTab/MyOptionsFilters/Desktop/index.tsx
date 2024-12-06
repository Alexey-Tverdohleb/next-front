import { FC } from 'react';

import { IFilters } from '@/app/[locale]/my-options/_tabs/OptionsTab/types';
import TokenDropdown from '@/app/[locale]/my-options/_tabs/OptionsTab/MyOptionsFilters/Desktop/TokenDropdown';
import DateDropdown from '@/app/[locale]/my-options/_tabs/OptionsTab/MyOptionsFilters/Desktop/DateDropdown';

const DesktopFilters: FC<IFilters> = () => {
  return (
    <div className="flex items-center">
      <TokenDropdown />
      <DateDropdown />
    </div>
  );
};

export default DesktopFilters;
