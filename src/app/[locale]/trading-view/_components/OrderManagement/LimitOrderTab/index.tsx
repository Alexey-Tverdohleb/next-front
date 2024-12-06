import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { actionsTabs } from '@/app/[locale]/trading-view/_components/OrderManagement/data';
import TabToggle from '@/components/TabToggle';
import Content from '@/app/[locale]/trading-view/_components/OrderManagement/LimitOrderTab/Content';
import useScreen from '@/hooks/useScreen';

export default function LimitOrderTab() {
  const { isDesktop } = useScreen();
  const t = useTranslations('OrdersManagement');
  const [activeActionsTab, setActiveActionTab] = useState(0);

  const actionsTabsLocale = useMemo(() => {
    return actionsTabs.map((tab) => ({
      ...tab,
      element: t(`actionsToggle.${tab.element}`),
    }));
  }, [t]);

  const onSubmit = (values: { price: number; amount: number; total: number }) => {
    // todo: add mutation
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <div className="flex flex-col gap-y-3">
      <TabToggle
        tabs={actionsTabsLocale}
        activeTab={activeActionsTab}
        onChange={setActiveActionTab}
        className="dark:bg-dark-500 desktop:hidden"
      />
      {isDesktop ? (
        <div className="flex gap-x-3">
          <Content
            title={t('orderContent.buyTitle')}
            buttonText={t('orderContent.buyButton', { coin: 'SNEK' })}
            buttonClassName="bg-green"
            onSubmit={onSubmit}
          />
          <Content
            title={t('orderContent.sellTitle')}
            buttonText={t('orderContent.sellButton', { coin: 'SNEK' })}
            buttonClassName="bg-red"
            onSubmit={onSubmit}
          />
        </div>
      ) : (
        <Content
          title={activeActionsTab === 0 ? t('orderContent.buyTitle') : t('orderContent.sellTitle')}
          buttonText={
            activeActionsTab === 0
              ? t('orderContent.buyButton', { coin: 'SNEK' })
              : t('orderContent.sellButton', { coin: 'SNEK' })
          }
          buttonClassName={activeActionsTab === 0 ? 'bg-green' : 'bg-red'}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
}
