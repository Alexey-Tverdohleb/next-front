import { FC, useCallback, useMemo, useState } from 'react';
import { Range, RangeKeyDict } from 'react-date-range';
import { useTranslations } from 'next-intl';

import { ISheetContent } from '@/app/[locale]/my-options/_tabs/OptionsTab/types';
import DateRangePicker from '@/components/DateRangePicker';
import Button from '@/components/Button';

import { INITIAL_RANGE } from '@/app/[locale]/my-options/_tabs/OptionsTab/MyOptionsFilters/constants';
import FiltersDivider from '@/app/[locale]/my-options/_components/FiltersDivider';
import TokensList from '@/components/TokensList';
import { tokenApi } from '@/api/tokenApi';
import SearchInput from '@/components/SearchInput';
import { IToken } from '@/types/token';
import useIssuedOptions from '@/context/issued-options/useIssuedOptions';
import { ISSUED_OPTIONS_FILTERS } from '@/constants/filters';

const SheetContent: FC<ISheetContent> = ({ toggleOpen }) => {
  const { filters, applyFilters } = useIssuedOptions();

  const t = useTranslations('MyOptionsPage.optionsHistoryTab');
  const [ranges, setRanges] = useState<Range[]>([
    {
      ...INITIAL_RANGE,
      startDate: filters[ISSUED_OPTIONS_FILTERS.startDate] ?? new Date(),
      endDate: filters[ISSUED_OPTIONS_FILTERS.endDate] ?? new Date(),
    },
  ]);

  const [search, setSearch] = useState<string>('');

  const [tokenName, setTokenName] = useState<string>(filters[ISSUED_OPTIONS_FILTERS.tokenName]);

  const handleRangeSelection = useCallback(
    ({ selection }: RangeKeyDict) => setRanges([selection]),
    [setRanges]
  );

  const handleApply = () => {
    applyFilters?.({
      ...filters,
      [ISSUED_OPTIONS_FILTERS.startDate]: ranges[0].startDate,
      [ISSUED_OPTIONS_FILTERS.endDate]: ranges[0].endDate,
      [ISSUED_OPTIONS_FILTERS.tokenName]: tokenName,
    });
    toggleOpen();
  };

  const { data: tokens } = tokenApi.useFetchTokensQuery();
  const { data: categories } = tokenApi.useFetchCategoriesQuery();

  const filteredTokens = useMemo(() => {
    if (!tokens) return [];

    if (!search) return tokens;

    return tokens.filter((token) =>
      token.info.symbol.toLowerCase().includes(search.trim().toLowerCase())
    );
  }, [search, tokens]);

  const handleSelect = useCallback((token: IToken) => setTokenName(token.info.symbol), []);

  return (
    <div>
      <div className="text-xl font-[600] mb-md">Filters</div>
      <div className="text-xs font-[600] mb-sm">Token:</div>
      <SearchInput
        placeholder={t('searchInput')}
        className="mb-sm font-[500]"
        onChange={setSearch}
      />
      <div className="h-[145px] overflow-x-auto">
        <TokensList
          tokens={filteredTokens}
          categories={categories}
          handleSelect={handleSelect}
          selectedTokenName={tokenName}
        />
      </div>
      <FiltersDivider />
      <div className="text-xs font-[600] mb-sm">Expire date:</div>
      <DateRangePicker handleSelection={handleRangeSelection} ranges={ranges} className="mb-md" />
      <Button label="Apply" onClick={handleApply} />
    </div>
  );
};

export default SheetContent;
