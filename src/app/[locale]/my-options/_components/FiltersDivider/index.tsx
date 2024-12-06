import { FC } from 'react';

import { IProps } from '@/app/[locale]/my-options/_components/FiltersDivider/types';

const FiltersDivider: FC<IProps> = () => {
  return (
    <div className="my-xl flex items-center justify-center">
      <div className="h-[1px] w-[107px] bg-gray-divider dark:bg-dark-200" />
    </div>
  );
};

export default FiltersDivider;
