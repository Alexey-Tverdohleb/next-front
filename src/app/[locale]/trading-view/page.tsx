'use client';

import CryptoPairSelects from '@/app/[locale]/trading-view/_components/CryptoPairSelects';
import CoinInfo from '@/app/[locale]/trading-view/_components/CoinInfo';
import Chart from '@/app/[locale]/trading-view/_components/Chart';
import OrdersList from '@/app/[locale]/trading-view/_components/OrdersList';
import OrdersManagement from '@/app/[locale]/trading-view/_components/OrderManagement';
import useScreen from '@/hooks/useScreen';

export default function TradingViewPage() {
  const { isDesktop } = useScreen();

  if (!isDesktop) {
    return (
      <div className="flex flex-col items-center gap-y-4">
        <CryptoPairSelects />
        <CoinInfo />
        <Chart />
        <OrdersList />
        <OrdersManagement />
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-gray-divider bg-white p-6 dark:border-dark-300 dark:bg-dark-400">
      <div className="flex gap-x-6 border-b border-b-gray-divider pb-2 dark:border-b-dark-300">
        <CryptoPairSelects />
        <CoinInfo />
      </div>
      <div className="flex">
        <OrdersList />
        <div className="w-full">
          <Chart />
          <OrdersManagement />
        </div>
      </div>
    </div>
  );
}
