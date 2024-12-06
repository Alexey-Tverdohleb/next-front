'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import TabToggle from '@/components/TabToggle';
import { content, tabs } from '@/app/[locale]/my-options/data';

const MyOptionsPage = () => {
  const t = useTranslations('MyOptionsPage.tabToggle');
  const [activeTab, setActiveTab] = useState(0);

  const tabsLocale = useMemo(() => {
    return tabs.map((tab) => ({
      ...tab,
      element: t(tab.element),
    }));
  }, [t]);

  return (
    <>
      <TabToggle
        tabs={tabsLocale}
        activeTab={activeTab}
        onChange={setActiveTab}
        className="mb-xmd desktop:mb-xl"
      />

      {content[activeTab].element}
    </>
  );
};

export default MyOptionsPage;
