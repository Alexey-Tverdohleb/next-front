import { FC } from 'react';

import { ICardHeader } from '@/app/[locale]/minting/_subpages/TokenSubPage/types';
import ArrowLeftIcon from '@/assets/icons/ArrowLeftIcon';

const CardHeader: FC<ICardHeader> = ({ toggleSubPage, title }) => {
  return (
    <div className="flex items-center mb-xl">
      <button className="cursor-pointer mr-xl" type="button" onClick={toggleSubPage}>
        <ArrowLeftIcon className="text-primary dark:text-dark-white" />
      </button>
      <h1 className="text-xxl font-[700] text-primary dark:text-dark-white">{title}</h1>
    </div>
  );
};

export default CardHeader;
