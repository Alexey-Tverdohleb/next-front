'use client';

import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';

import { IInfoBlockHeader } from '@/app/[locale]/markets/_components/InfoBlockHeader/types';
import InfoBlock from '@/app/[locale]/markets/_components/InfoBlockHeader/InfoBlock';
import ChevronRightIcon from '@/assets/icons/ChevronRightIcon';
import StarIcon from '@/assets/icons/StarIcon';
import IncreaseIcon from '@/assets/icons/IncreaseIcon';
import DecreaseIcon from '@/assets/icons/DecreaseIcon';
import useMarkets from '@/context/markets/useMarkets';
import ItemsList from '@/app/[locale]/markets/_components/InfoBlockHeader/ItemsList';

const InfoBlockHeader: FC<IInfoBlockHeader> = ({ className }) => {
  const t = useTranslations('MarketsPage.infoBlockHeader');

  const { data } = useMarkets();
  // TODO: replace mock data
  const mockData = data.slice(0, 3);

  return (
    <div
      className={twMerge(
        'flex items-center justify-stretch',
        'text-primary dark:text-dark-white',
        'max-w-screen overflow-x-auto',
        className
      )}
    >
      <InfoBlock>
        <div className="flex items-center justify-between mb-md">
          <div className="flex items-center">
            <StarIcon className="mr-md" />
            <div className="desktop:text-lg text-md font-[700] whitespace-nowrap mr-md">
              {t('topVolume')}
            </div>
          </div>
          <ChevronRightIcon className="w-[16px] h-[16px]" />
        </div>
        <ItemsList data={mockData} />
      </InfoBlock>
      <InfoBlock>
        <div className="flex items-center justify-between mb-md">
          <div className="flex items-center">
            <IncreaseIcon className="mr-md" />
            <div className="desktop:text-lg text-md font-[700] whitespace-nowrap">
              {t('topGainers')}
            </div>
          </div>
          <ChevronRightIcon className="w-[16px] h-[16px]" />
        </div>
        <ItemsList data={mockData} />
      </InfoBlock>
      <InfoBlock>
        <div className="flex items-center justify-between mb-md">
          <div className="flex items-center">
            <DecreaseIcon className="mr-md" />
            <div className="desktop:text-lg text-md font-[700] whitespace-nowrap">
              {t('topDecliners')}
            </div>
          </div>
          <ChevronRightIcon className="w-[16px] h-[16px]" />
        </div>
        <ItemsList data={mockData} />
      </InfoBlock>
    </div>
  );
};

export default InfoBlockHeader;
