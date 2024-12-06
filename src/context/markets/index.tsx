'use client';

import { FC, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { tokenApi } from '@/api/tokenApi';
import { IMarketsContext, IProvider, TFilters, TFiltersApply } from '@/context/markets/types';
import marketsContext from '@/context/markets/context';
import { DEFAULT_VALUES } from '@/context/markets/defaultValues';
import { KEYS } from '@/context/markets/keys';
import { MARKETS_FILTERS } from '@/constants/filters';

const MarketsProvider: FC<IProvider> = ({ children }) => {
  const ProviderElement = marketsContext.Provider;

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const { data = [] } = tokenApi.useFetchTokensQuery();
  const { data: categoriesMap = {} } = tokenApi.useFetchCategoriesQuery();

  const filters: TFilters = useMemo(() => {
    return KEYS.reduce((acc, key) => {
      const value = searchParams.get(key);

      if (key === MARKETS_FILTERS.tokenVerified) {
        const tokenVerified = String(value).toLowerCase() === 'true';

        return { ...acc, [key]: tokenVerified };
      }

      return value ? { ...acc, [key]: value } : acc;
    }, DEFAULT_VALUES.filters);
  }, [searchParams]);

  const filteredData = useMemo(() => {
    if (!data) return [];

    return data
      .filter((item) => {
        const filterValue = filters[MARKETS_FILTERS.tokenName];

        if (!filterValue) return true;

        return item.info.symbol.toLowerCase().includes(filterValue.trim().toLowerCase());
      })
      .filter((item) => {
        const filterValue = String(filters[MARKETS_FILTERS.tokenVerified]).toLowerCase() === 'true';

        if (!filterValue) return true;

        return item.info.status === 'verified';
      });
  }, [data, filters]);

  const applyFilters: TFiltersApply = (filters) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!filters) {
      KEYS.forEach((key) => params.delete(key));
    }

    if (filters?.[MARKETS_FILTERS.tokenName]) {
      params.set(MARKETS_FILTERS.tokenName, filters[MARKETS_FILTERS.tokenName]);
    } else {
      params.delete(MARKETS_FILTERS.tokenName);
    }

    if (filters?.[MARKETS_FILTERS.tokenVerified]) {
      params.set(MARKETS_FILTERS.tokenVerified, String(filters[MARKETS_FILTERS.tokenVerified]));
    } else {
      params.delete(MARKETS_FILTERS.tokenVerified);
    }

    if (filters?.[MARKETS_FILTERS.base]) {
      params.set(MARKETS_FILTERS.base, filters[MARKETS_FILTERS.base]);
    } else {
      params.delete(MARKETS_FILTERS.base);
    }

    if (filters?.[MARKETS_FILTERS.classification]) {
      params.set(MARKETS_FILTERS.classification, filters[MARKETS_FILTERS.classification]);
    } else {
      params.delete(MARKETS_FILTERS.classification);
    }

    router.push(pathName + '?' + params.toString());
  };

  const providerValue: IMarketsContext = {
    ...DEFAULT_VALUES,
    data,
    categoriesMap,
    filters,
    filteredData,
    applyFilters,
  };

  return <ProviderElement value={providerValue}>{children}</ProviderElement>;
};

export default MarketsProvider;
