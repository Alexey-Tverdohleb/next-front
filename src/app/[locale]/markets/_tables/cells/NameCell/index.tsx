import { FC, useState } from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { replaceTokenURI, truncateText } from '@/helpers/common';
import { INameCell } from '@/app/[locale]/markets/_tables/cells/NameCell/types';
import LefAlignCell from '@/components/Table/LeftAlignCell';
import { FALLBACK_URL } from '@/app/[locale]/minting/_components/TokenImage/constants';
import VerifiedIcon from '@/assets/icons/VerifiedIcon';
import Badge from '@/components/Badge';
import useMarkets from '@/context/markets/useMarkets';

const NameCell: FC<INameCell> = ({ getValue }) => {
  const { image, symbol, status, categories } = getValue();

  const [error, setError] = useState<boolean>(false);

  const isVerified = status === 'verified';

  const { categoriesMap } = useMarkets();

  return (
    <LefAlignCell>
      <div className="flex items-center">
        <div
          className={twMerge(
            'relative flex items-end',
            'h-[24px] w-[32px] desktop:h-[40px] desktop:w-[55px]',
            'mr-sm desktop:mr-md'
          )}
        >
          <div
            className={twMerge(
              'absolute z-50 shrink-0 overflow-hidden rounded-full',
              'bg-white dark:bg-dark-400',
              'h-[24px] w-[24px] desktop:h-[40px] desktop:w-[40px]'
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
              'shrink-0 overflow-hidden rounded-full',
              'h-[16px] w-[16px] desktop:h-[24px] desktop:w-[24px]',
              'absolute left-[16px] desktop:left-[30px]'
            )}
          >
            <Image layout="fill" src="/pair-ellipse.svg" alt="PAIR" />
          </div>
        </div>
        <div className="mr-sm desktop:mr-md">{truncateText(symbol, 6)}</div>

        {isVerified && <VerifiedIcon className="mr-sm text-blue-500 desktop:mr-md" />}

        {categories.map((categoryId) => (
          <Badge key={categoryId} className="mr-xxs" label={categoriesMap[categoryId]?.name} />
        ))}
      </div>
    </LefAlignCell>
  );
};

export default NameCell;
