import { FC } from 'react';

import { ILayout } from '@/app/[locale]/my-trades/types';
import MyTradesProvider from '@/context/my-trades';

const MyTradesLayout: FC<ILayout> = ({ children }) => {
  return <MyTradesProvider>{children}</MyTradesProvider>;
};

export default MyTradesLayout;
