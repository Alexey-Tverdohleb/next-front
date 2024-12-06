'use client';

import { useTranslations } from 'next-intl';
import Filters from '@/app/[locale]/markets/[Id]/_components/Filters';
import CallTable from '@/app/[locale]/markets/[Id]/_components/CallTable';
import SwipeIcon from '@/assets/icons/SwipeIcon';
import { useMarketData } from '@/store/hooks/markets';
import Pagination from '@/components/Pagination';
import useScreen from '@/hooks/useScreen';
import CoinInfoTable from '@/app/[locale]/markets/[Id]/_components/CoinInfoTable';

const MarketDetails = () => {
  const data = useMarketData();
  const { isDesktop } = useScreen();
  const t = useTranslations('Common');

  const showSwipeTip = !isDesktop;
  return (
    <>
      <Filters />
      <div>
        <div className="max-w-screen w-full overflow-hidden overflow-x-auto">
          <table className="w-full table-auto">
            <CoinInfoTable data={data ? [data] : []} />
            <CallTable isCall={true} />
            <CallTable isCall={false} />
          </table>
        </div>
        {showSwipeTip && (
          <div className="my-md flex w-full items-center justify-center text-gray-secondary dark:text-dark-gray">
            <SwipeIcon className="mr-sm" />
            <div className="text-sm font-medium">{t('swipeTip')}</div>
          </div>
        )}
        <Pagination pageCount={40} goToPage={(page) => console.log(page)} />
      </div>
    </>
  );
};

export default MarketDetails;
