import { FC } from 'react';

import { ITokenInfoCell } from '@/app/[locale]/markets/_tables/cells/TokenInfoCell/types';
import { truncateText } from '@/helpers/common';
import VerifiedIcon from '@/assets/icons/VerifiedIcon';
import Badge from '@/components/Badge';
import LeftAlignCell from '@/components/Table/LeftAlignCell';
import useMarkets from '@/context/markets/useMarkets';

const TokenInfoCell: FC<ITokenInfoCell> = ({ getValue }) => {
  const { symbol, status, categories } = getValue();

  const isVerified = status === 'verified';

  const { categoriesMap } = useMarkets();

  return (
    <LeftAlignCell>
      <div className="flex items-center">
        <div className="desktop:mr-md mr-sm">{truncateText(symbol, 6)}</div>

        {isVerified && <VerifiedIcon className="text-blue-500 desktop:mr-md mr-sm" />}

        {categories.map((categoryId) => (
          <Badge key={categoryId} className="mr-xxs" label={categoriesMap[categoryId]?.name} />
        ))}
      </div>
    </LeftAlignCell>
  );
};

export default TokenInfoCell;
