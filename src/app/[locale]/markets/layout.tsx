import { FC } from 'react';

import { IMarketsLayout } from '@/app/[locale]/markets/types';
import MarketsProvider from '@/context/markets';
import InfoBlockHeader from '@/app/[locale]/markets/_components/InfoBlockHeader';
import Card from '@/app/[locale]/minting/_components/Card';

const MarketsLayout: FC<IMarketsLayout> = ({ children }) => {
  return (
    <MarketsProvider>
      <InfoBlockHeader className="desktop:mb-xl mb-xmd" />
      <Card className="max-w-full">{children}</Card>
    </MarketsProvider>
  );
};

export default MarketsLayout;
