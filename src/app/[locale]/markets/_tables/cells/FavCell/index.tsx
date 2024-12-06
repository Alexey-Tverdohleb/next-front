import { FC } from 'react';

import { IFavCell } from '@/app/[locale]/markets/_tables/cells/FavCell/types';
import LeftAlignCell from '@/components/Table/LeftAlignCell';
import FavIcon from '@/assets/icons/favIcon';

const FavCell: FC<IFavCell> = () => {
  return (
    <LeftAlignCell>
      <FavIcon className="cursor-pointer shrink-0 text-gray-secondary dark:text-dark-gray" />
    </LeftAlignCell>
  );
};

export default FavCell;
