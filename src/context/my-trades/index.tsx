'use client';

import { FC, useCallback, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import myTradesContext from '@/context/my-trades/context';
import { tokenApi } from '@/api/tokenApi';
import { IMyTradesContext, IProvider, TApplyFilters, TFilters } from '@/context/my-trades/types';
import { DEFAULT_VALUE } from '@/context/my-trades/defaultValue';
import { DATE_KEYS, KEYS } from '@/context/my-trades/keys';
import { MY_TRADES_FILTERS } from '@/constants/filters';

const MyTradesProvider: FC<IProvider> = ({ children }) => {
  const ProviderElement = myTradesContext.Provider;

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const { data } = tokenApi.useFetchTokensQuery();

  const filters: TFilters = useMemo(() => {
    return KEYS.reduce((acc, key) => {
      const value = searchParams.get(key);

      if (DATE_KEYS.includes(key)) {
        return value ? { ...acc, [key]: new Date(parseInt(value)) } : acc;
      }

      return value ? { ...acc, [key]: value } : acc;
    }, DEFAULT_VALUE.filters);
  }, [searchParams]);

  const applyFilters: TApplyFilters = useCallback(
    (filters) => {
      const params = new URLSearchParams(searchParams.toString());

      if (!filters) {
        KEYS.forEach((key) => params.delete(key));
      }

      if (filters?.[MY_TRADES_FILTERS.startDate] && filters?.[MY_TRADES_FILTERS.endDate]) {
        params.set(
          MY_TRADES_FILTERS.startDate,
          filters[MY_TRADES_FILTERS.startDate].getTime().toString()
        );
        params.set(
          MY_TRADES_FILTERS.endDate,
          filters[MY_TRADES_FILTERS.endDate].getTime().toString()
        );
      } else {
        params.delete(MY_TRADES_FILTERS.startDate);
        params.delete(MY_TRADES_FILTERS.endDate);
      }

      if (filters?.[MY_TRADES_FILTERS.tokenName]) {
        params.set(MY_TRADES_FILTERS.tokenName, filters[MY_TRADES_FILTERS.tokenName]);
      } else {
        params.delete(MY_TRADES_FILTERS.tokenName);
      }

      if (filters?.[MY_TRADES_FILTERS.status]) {
        params.set(MY_TRADES_FILTERS.status, filters[MY_TRADES_FILTERS.status]);
      } else {
        params.delete(MY_TRADES_FILTERS.status);
      }

      router.push(pathName + '?' + params.toString());
    },
    [searchParams, pathName, router]
  );

  const filteredData = useMemo(() => {
    if (!data) return [];

    if (!filters?.[MY_TRADES_FILTERS.tokenName]) return data;

    return data.filter((item) =>
      item.info.symbol
        .toLowerCase()
        .includes(filters[MY_TRADES_FILTERS.tokenName].trim().toLowerCase())
    );
  }, [data, filters]);

  const providerValue: IMyTradesContext = {
    ...DEFAULT_VALUE,
    filters,
    filteredData,
    applyFilters,
  };

  return <ProviderElement value={providerValue}>{children}</ProviderElement>;
};

export default MyTradesProvider;
