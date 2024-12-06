import { FC } from 'react';

import { truncateText } from '@/helpers/common';
import TokenImage from '@/app/[locale]/minting/_components/TokenImage';
import { IProps } from '@/app/[locale]/my-options/_tables/cells/types';
import useScreen from '@/hooks/useScreen';
import LeftAlignCell from '@/components/Table/LeftAlignCell';

const TokenCell: FC<IProps> = ({ getValue }) => {
  const { isDesktop } = useScreen();
  const SIZE = isDesktop ? 40 : 32;

  const { image, symbol } = getValue();

  return (
    <LeftAlignCell>
      <TokenImage src={image} width={SIZE} height={SIZE} className="mr-md" />
      <div title={symbol} className="font-[600]">
        {truncateText(symbol, 5)}
      </div>
    </LeftAlignCell>
  );
};

export default TokenCell;
