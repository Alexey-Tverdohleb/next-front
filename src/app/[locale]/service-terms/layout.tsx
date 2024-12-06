import { FC } from 'react';

import { ILayout } from '@/app/[locale]/service-terms/types';

const Layout: FC<ILayout> = ({ children }) => {
  return <div className="flex justify-center">{children}</div>;
};

export default Layout;
