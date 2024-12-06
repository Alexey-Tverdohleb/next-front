import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { IProps } from '@/app/[locale]/minting/_subpages/TokenSubPage/types';
import { IToken } from '@/types/token';
import { tokenApi } from '@/api/tokenApi';
import Card from '@/app/[locale]/minting/_components/Card';
import CardHeader from '@/app/[locale]/minting/_subpages/TokenSubPage/CardHeader';
import CardFilters from '@/app/[locale]/minting/_subpages/TokenSubPage/CardFilters';
import useMintingForm from '@/forms/MintingForm/useMintingForm';
import useURLFilters from '@/app/[locale]/minting/_subpages/TokenSubPage/useURLFilters';
import TokensList from '@/components/TokensList';

const TokenSubPage: FC<IProps> = ({ toggleSubPage }) => {
  const t = useTranslations('MintingPage.TokenSubPage');

  const { data: tokens } = tokenApi.useFetchTokensQuery();
  const { data: categories } = tokenApi.useFetchCategoriesQuery();

  const { filteredTokens, filtersValue, handleToggle, handleSearch } = useURLFilters(tokens);

  const { setFieldValue } = useMintingForm();

  const handleSelect = (token: IToken) => {
    setFieldValue('token', token).catch(console.error);
    toggleSubPage?.();
  };

  return (
    <Card>
      <CardHeader toggleSubPage={() => toggleSubPage?.()} title={t('title')} />
      <CardFilters
        filtersValue={filtersValue}
        handleToggle={handleToggle}
        handleSearch={handleSearch}
      />
      <TokensList tokens={filteredTokens} categories={categories} handleSelect={handleSelect} />
    </Card>
  );
};

export default TokenSubPage;
