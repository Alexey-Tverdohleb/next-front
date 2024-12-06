import { FC } from 'react';

import { IItemsList } from '@/app/[locale]/markets/_components/InfoBlockHeader/types';
import { twMerge } from 'tailwind-merge';
import { truncateText } from '@/helpers/common';
import TokenImage from '@/app/[locale]/minting/_components/TokenImage';
import ArrowUpIcon from '@/assets/icons/ArrowUpIcon';

const ItemsList: FC<IItemsList> = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className={twMerge('grid grid-cols-3 items-center justify-between', 'py-sm')}
        >
          <div className="flex items-center">
            <TokenImage src={item.info.image} />
            <div className="text-sm font-[500]">{truncateText(item.info.symbol, 5)}</div>
          </div>
          <div className="text-right text-sm font-[500]">{item.price.askPrice}</div>
          <div className="text-xs font-[500] text-green flex items-center justify-end">
            <div className="mr-xxs">+1.35%</div>
            <ArrowUpIcon className="shrink-0" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
