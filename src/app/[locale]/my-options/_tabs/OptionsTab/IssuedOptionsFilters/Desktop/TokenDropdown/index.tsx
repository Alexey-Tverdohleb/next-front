import { FC, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import { IDropdown } from '@/app/[locale]/my-options/_tabs/OptionsTab/types';
import { tokenApi } from '@/api/tokenApi';
import FilterDropdown from '@/components/FilterDropdown';
import useToggle from '@/hooks/useToggle/useToggle';
import SearchInput from '@/components/SearchInput';
import TokensList from '@/components/TokensList';
import { IToken } from '@/types/token';
import useIssuedOptions from '@/context/issued-options/useIssuedOptions';
import { ISSUED_OPTIONS_FILTERS } from '@/constants/filters';
import { truncateText } from '@/helpers/common';

const TokenDropdown: FC<IDropdown> = () => {
  const [isOpen, toggleOpen] = useToggle({ initial: false });
  const t = useTranslations('MyOptionsPage.optionsHistoryTab');
  const { filters, applyFilters } = useIssuedOptions();

  const { data: tokens } = tokenApi.useFetchTokensQuery();
  const { data: categories } = tokenApi.useFetchCategoriesQuery();

  const [search, setSearch] = useState<string>('');

  const filteredTokens = useMemo(() => {
    if (!tokens) return [];

    if (!search) return tokens;

    return tokens.filter((token) =>
      token.info.symbol.toLowerCase().includes(search.trim().toLowerCase())
    );
  }, [search, tokens]);

  const handleSelect = (token: IToken) => {
    applyFilters?.({ ...filters, [ISSUED_OPTIONS_FILTERS.tokenName]: token.info.symbol });
    toggleOpen();
  };

  const onClear = () => applyFilters?.({ ...filters, [ISSUED_OPTIONS_FILTERS.tokenName]: '' });

  return (
    <FilterDropdown
      currentValue={truncateText(filters[ISSUED_OPTIONS_FILTERS.tokenName])}
      isOpen={isOpen}
      toggleOpen={toggleOpen}
      label="Token:"
      className="mr-md"
      popupClassName="p-0"
      onClear={onClear}
    >
      <>
        <SearchInput
          value={search}
          className="my-md"
          placeholder={t('searchInput')}
          onChange={setSearch}
        />
        <TokensList
          className="max-h-[400px] w-[350px] overflow-x-auto py-md"
          badgeClassName="dark:bg-dark-300"
          tokens={filteredTokens}
          categories={categories}
          selectedTokenName={filters[ISSUED_OPTIONS_FILTERS.tokenName]}
          handleSelect={handleSelect}
          selectedClassName="dark:bg-dark-gray"
          itemClassName="px-md rounded-[4px]"
        />
      </>
    </FilterDropdown>
  );
};

export default TokenDropdown;
