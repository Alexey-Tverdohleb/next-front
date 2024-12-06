import { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

import { ICell } from '@/app/[locale]/my-trades/_tables/cells/PairCell/types';
import { replaceTokenURI } from '@/helpers/common';
import { FALLBACK_URL } from '@/app/[locale]/minting/_components/TokenImage/constants';
import ArrowUpIcon from '@/assets/icons/ArrowUpIcon';
import { truncateText } from '@/helpers/common';
import LeftAlignCell from '@/components/Table/LeftAlignCell';

const PairCell: FC<ICell> = ({ getValue }) => {
  const { image, symbol } = getValue();

  const [error, setError] = useState<boolean>(false);

  return (
    <LeftAlignCell>
      <div
        className={twMerge(
          'flex items-end relative',
          'desktop:h-[40px] h-[24px] desktop:w-[55px] w-[32px]',
          'desktop:mr-md mr-sm'
        )}
      >
        <div
          className={twMerge(
            'rounded-full absolute overflow-hidden z-50 shrink-0',
            'bg-white dark:bg-dark-400',
            'desktop:w-[40px] desktop:h-[40px] w-[24px] h-[24px]'
          )}
        >
          <Image
            layout="fill"
            src={error ? FALLBACK_URL : replaceTokenURI(image)}
            alt="TOKEN"
            onError={() => setError(true)}
          />
        </div>
        <div
          className={twMerge(
            'rounded-full overflow-hidden shrink-0',
            'desktop:w-[24px] desktop:h-[24px] w-[16px] h-[16px]',
            'absolute desktop:left-[30px] left-[16px]'
          )}
        >
          <Image layout="fill" src="/pair-ellipse.svg" alt="PAIR" />
        </div>
      </div>
      <ArrowUpIcon className="shrink-0 text-green h-[16px] w-[16px] desktop:mr-md mr-sm" />
      <div>
        <div
          className={twMerge(
            'flex items-center',
            'text-primary dark:text-dark-white desktop:text-md text-sm font-[600] whitespace-nowrap'
          )}
        >
          <span>CALL</span>&nbsp;
          <span>{truncateText(symbol, 5)}</span>&nbsp;
          <span>1/10</span>
        </div>
        <div className="desktop:text-sm text-xs font-[500] text-gray dark:text-dark-gray">
          ADA-MILK
        </div>
      </div>
    </LeftAlignCell>
  );
};

export default PairCell;
