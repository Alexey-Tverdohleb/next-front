import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import TabToggle from '@/components/TabToggle';
import { orderTabs } from '@/app/[locale]/trading-view/_components/OrderManagement/data';
import LimitOrderTab from '@/app/[locale]/trading-view/_components/OrderManagement/LimitOrderTab';
import OpenOrdersTab from '@/app/[locale]/trading-view/_components/OrderManagement/OpenOrdersTab';

const ordersContent = [{ element: <LimitOrderTab /> }, { element: <OpenOrdersTab /> }];

export default function OrdersManagement() {
  const t = useTranslations('OrdersManagement');
  const [activeOrderTab, setActiveOrderTab] = useState(0);

  const orderTabsLocale = useMemo(() => {
    return orderTabs.map((tab) => ({
      ...tab,
      element: t(`ordersToggle.${tab.element}`),
    }));
  }, [t]);

  return (
    <div className="flex w-full flex-col gap-y-3 rounded-xl border border-gray-divider bg-white p-3 dark:border-dark-300 dark:bg-dark-400 desktop:border-none">
      <TabToggle
        tabs={orderTabsLocale}
        activeTab={activeOrderTab}
        onChange={setActiveOrderTab}
        className="dark:bg-dark-500"
      />
      {ordersContent[activeOrderTab].element}
    </div>
  );
}
