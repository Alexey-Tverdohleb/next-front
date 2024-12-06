'use client';

import { useTranslations } from 'next-intl';

import FormSubPage from '@/app/[locale]/minting/_subpages/FormSubPage';
import AsideBlock from '@/app/[locale]/minting/_components/AsideBlock';
import ArrowUpIcon from '@/assets/icons/ArrowUpIcon';
import ArrowDownIcon from '@/assets/icons/ArrowDownIcon';
import useToggle from '@/hooks/useToggle/useToggle';
import TokenSubPage from '@/app/[locale]/minting/_subpages/TokenSubPage';
import { truncateText } from '@/helpers/common';
import TokenImage from '@/app/[locale]/minting/_components/TokenImage';
import useMintingForm from '@/forms/MintingForm/useMintingForm';

const MintingPage = () => {
  const [isSubPage, toggleSubPage] = useToggle({ initial: false });

  const t = useTranslations('MintingPage.Aside');

  const { values } = useMintingForm();

  if (isSubPage) {
    return <TokenSubPage toggleSubPage={toggleSubPage} />;
  }

  return (
    <>
      <FormSubPage toggleSubPage={toggleSubPage} />
      <aside className="ml-md hidden desktop:block">
        <AsideBlock>
          <div className="flex items-center mb-md">
            <TokenImage src={values.token?.info.image} />
            <div className="text-xl font-[600] text-primary dark:text-dark-white">
              {truncateText(values.token?.info.symbol, 5)}
            </div>
          </div>
          <div>
            <div className="text-gray-secondary text-xs font-[500]">{t('price')} (1d)</div>
            <div className="flex items-center w-full mb-md">
              <div className="text-primary dark:text-white text-xxl font-[700] mr-md">$3.13</div>
              <div className="flex items-center">
                <span className="text-green text-xs font-[500] mr-xs">+3.45%</span>
                <div className="shrink-0">
                  <ArrowUpIcon className="text-green" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-gray-secondary text-xs font-[500]">{t('volume')} (24h)</div>
            <div className="flex items-center w-full">
              <div className="text-primary dark:text-dark-white text-lg font-[700] mr-md">
                $29.052
              </div>
              <div className="flex items-center">
                <span className="text-red text-xs font-[500] mr-xs">-37.38%</span>
                <div className="shrink-0">
                  <ArrowDownIcon className="text-red" />
                </div>
              </div>
            </div>
          </div>
        </AsideBlock>
        <AsideBlock>
          <div className="mb-md">
            <div className="text-gray-secondary text-xs font-[500]">{t('alreadyIssued')}</div>
            <div className="text-primary dark:text-white text-lg font-[700] mr-md">23 options</div>
          </div>
          <div className="mb-md">
            <div className="text-gray-secondary text-xs font-[500]">{t('volume')} (7d)</div>
            <div className="flex items-center w-full">
              <div className="text-primary dark:text-dark-white text-lg font-[700] mr-md">
                $36.561
              </div>
              <div className="flex items-center">
                <span className="text-green text-xs font-[500] mr-xs">-1.17%</span>
                <div className="shrink-0">
                  <ArrowUpIcon className="text-green" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-gray-secondary text-xs font-[500]">{t('estimationPrice')}</div>
            <div className="text-primary text-lg font-[700] dark:text-dark-white mr-md">
              $2.84&nbsp;-&nbsp;$3.19
            </div>
          </div>
        </AsideBlock>
      </aside>
    </>
  );
};

export default MintingPage;
