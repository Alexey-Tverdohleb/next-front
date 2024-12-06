import { FC } from 'react';

import { IProps } from '@/app/[locale]/my-options/_tables/components/SortableHeader/types';
import { getSortingIcon, TSortingIconDict } from '@/constants/sortingIconsDict';

const SortableHeader: FC<IProps> = ({ children, header }) => {
  const SortingIcon = getSortingIcon(header.column.getIsSorted() as keyof TSortingIconDict);

  return (
    <div
      onClick={header.column.getToggleSortingHandler()}
      className="cursor-pointer flex items-center"
    >
      {children}
      <div className="w-[18px] h-[18px] ml-sm flex items-center justify-center shrink-0">
        <SortingIcon className="w-[18px] h-[18px]" />
      </div>
    </div>
  );
};

export default SortableHeader;
