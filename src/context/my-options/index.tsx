'use client';

import { FC, useCallback, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { tokenApi } from '@/api/tokenApi';
import myOptionsContext from '@/context/my-options/context';
import { IProvider } from '@/context/my-options/types';
import { DEFAULT_VALUE } from '@/context/my-options/defaultValue';
import { DATE_KEYS, KEYS } from '@/context/my-options/keys';
import { TFilters } from '@/context/my-options/types';
import { MY_OPTIONS_FILTERS } from '@/constants/filters';
import { TApplyFilters } from '@/context/my-options/types';

const MyOptionsProvider: FC<IProvider> = ({ children }) => {
  const ProviderElement = myOptionsContext.Provider;

  const { data } = tokenApi.useFetchTokensQuery();

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const filters: TFilters = useMemo(() => {
    return KEYS.reduce((acc, key) => {
      const value = searchParams.get(key);

      if (DATE_KEYS.includes(key)) {
        return value ? { ...acc, [key]: new Date(parseInt(value)) } : acc;
      }

      return value ? { ...acc, [key]: value } : acc;
    }, DEFAULT_VALUE.filters);
  }, [searchParams]);

  const filteredData = useMemo(() => {
    if (!data) return [];

    if (!filters?.[MY_OPTIONS_FILTERS.tokenName]) return data;

    return data.filter((item) =>
      item.info.symbol
        .toLowerCase()
        .includes(filters[MY_OPTIONS_FILTERS.tokenName].trim().toLowerCase())
    );
  }, [data, filters]);

  const applyFilters: TApplyFilters = useCallback(
    (filters) => {
      const params = new URLSearchParams(searchParams.toString());

      if (!filters) {
        KEYS.forEach((key) => params.delete(key));
      }

      if (filters?.[MY_OPTIONS_FILTERS.startDate] && filters?.[MY_OPTIONS_FILTERS.endDate]) {
        params.set(
          MY_OPTIONS_FILTERS.startDate,
          filters[MY_OPTIONS_FILTERS.startDate].getTime().toString()
        );
        params.set(
          MY_OPTIONS_FILTERS.endDate,
          filters[MY_OPTIONS_FILTERS.endDate].getTime().toString()
        );
      } else {
        params.delete(MY_OPTIONS_FILTERS.startDate);
        params.delete(MY_OPTIONS_FILTERS.endDate);
      }

      if (filters?.[MY_OPTIONS_FILTERS.tokenName]) {
        params.set(MY_OPTIONS_FILTERS.tokenName, filters[MY_OPTIONS_FILTERS.tokenName]);
      } else {
        params.delete(MY_OPTIONS_FILTERS.tokenName);
      }

      router.push(pathName + '?' + params.toString());
    },
    [searchParams, pathName, router]
  );

  const providerValue = { ...DEFAULT_VALUE, filters, filteredData, applyFilters };

  return <ProviderElement value={providerValue}>{children}</ProviderElement>;
};

export default MyOptionsProvider;
