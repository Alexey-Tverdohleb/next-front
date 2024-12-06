import { FC } from 'react';

import { IProps } from '@/app/[locale]/minting/types';
import MintingForm from '@/forms/MintingForm';

const MintingLayout: FC<IProps> = ({ children }) => {
  return (
    <MintingForm>
      <div className="flex justify-center">{children}</div>
    </MintingForm>
  );
};

export default MintingLayout;
