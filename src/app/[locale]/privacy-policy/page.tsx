'use client';

import { useTranslations } from 'next-intl';

import Card from '@/app/[locale]/minting/_components/Card';

const PrivacyPolicyPage = () => {
  const t = useTranslations('PrivacyPolicyPage');

  return (
    <Card className="max-w-[1200px] text-primary dark:text-dark-white">
      <h1 className="text-xxl font-[700] mb-xl">{t('title')}</h1>
      <h2 className="text-lg font-[700] mb-sm">1. First text subtitle.</h2>
      <div className="mb-xmd">
        <p className="text-md font-[500] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-[700] mb-sm">2. Second text subtitle.</h2>
        <p className="text-md font-[500] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </Card>
  );
};

export default PrivacyPolicyPage;
