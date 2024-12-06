import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { ICardFilters } from '@/app/[locale]/minting/_subpages/TokenSubPage/types';
import SearchInput from '@/components/SearchInput';
import Toggle from '@/app/[locale]/minting/_components/Toggle';

const CardFilters: FC<ICardFilters> = ({ handleToggle, handleSearch, filtersValue }) => {
  const t = useTranslations('MintingPage.TokenSubPage');

  return (
    <div className="mb-xl flex items-center justify-center flex-col desktop:flex-row">
      <SearchInput
        value={filtersValue.tokenName}
        onChange={handleSearch}
        placeholder={t('search.placeholder')}
        className="mb-xl desktop:mb-0 desktop:mr-md"
      />
      <Toggle
        value={filtersValue.tokenVerified}
        onToggle={handleToggle}
        labelPosition="right"
        label={t('toggle.label')}
      />
    </div>
  );
};

export default CardFilters;
