import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

import ArrowLeftIcon from '@/assets/icons/ArrowLeftIcon';
import DateDropdown from '@/app/[locale]/markets/[Id]/_components/DateDropdown';
import StrikeDropdown from '@/app/[locale]/markets/[Id]/_components/StrikeDropdown';
import VolumeDropdown from '@/app/[locale]/markets/[Id]/_components/VolumeDropdown';

const Desktop = () => {
  const t = useTranslations('MarketsPage.marketsDetails');

  const router = useRouter();

  return (
    <div className={twMerge('flex items-center justify-between', 'desktop:mb-xl mb-md"')}>
      <div className="flex items-center text-primary dark:text-dark-white">
        <button
          type="button"
          className="cursor-pointer mr-md"
          onClick={() => router.replace('/markets')}
        >
          <ArrowLeftIcon />
        </button>
        <div className="text-xl font-[600]">{t('backButton')}</div>
      </div>
      <div className="flex items-center">
        <DateDropdown label="Expiry date:" className="mr-md" />
        <StrikeDropdown label="Strike price:" className="mr-md" />
        <VolumeDropdown label="Volume:" />
      </div>
    </div>
  );
};

export default Desktop;
