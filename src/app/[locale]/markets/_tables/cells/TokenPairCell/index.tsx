import { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

import { ITokenPairCell } from '@/app/[locale]/markets/_tables/cells/TokenPairCell/types';
import { FALLBACK_URL } from '@/app/[locale]/minting/_components/TokenImage/constants';
import { replaceTokenURI } from '@/helpers/common';
import LeftAlignCell from '@/components/Table/LeftAlignCell';

const TokenPairCell: FC<ITokenPairCell> = ({ getValue }) => {
  const { image } = getValue();

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
    </LeftAlignCell>
  );
};

export default TokenPairCell;
