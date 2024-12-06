'use client';

import { FC, useCallback, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { tokenApi } from '@/api/tokenApi';
import issuedOptionsContext from '@/context/issued-options/context';
import { IProvider, TApplyFilters } from '@/context/issued-options/types';
import { DEFAULT_VALUE } from '@/context/issued-options/defaultValue';
import { DATE_KEYS, KEYS } from '@/context/issued-options/keys';
import { TFilters } from '@/context/issued-options/types';
import { ISSUED_OPTIONS_FILTERS } from '@/constants/filters';

const IssuedOptionsProvider: FC<IProvider> = ({ children }) => {
  const ProviderElement = issuedOptionsContext.Provider;

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

    if (!filters?.[ISSUED_OPTIONS_FILTERS.tokenName]) return data;

    return data.filter((item) =>
      item.info.symbol
        .toLowerCase()
        .includes(filters[ISSUED_OPTIONS_FILTERS.tokenName].trim().toLowerCase())
    );
  }, [data, filters]);

  const applyFilters: TApplyFilters = useCallback(
    (filters) => {
      const params = new URLSearchParams(searchParams.toString());

      if (!filters) {
        KEYS.forEach((key) => params.delete(key));
      }

      if (
        filters?.[ISSUED_OPTIONS_FILTERS.startDate] &&
        filters?.[ISSUED_OPTIONS_FILTERS.endDate]
      ) {
        params.set(
          ISSUED_OPTIONS_FILTERS.startDate,
          filters[ISSUED_OPTIONS_FILTERS.startDate].getTime().toString()
        );
        params.set(
          ISSUED_OPTIONS_FILTERS.endDate,
          filters[ISSUED_OPTIONS_FILTERS.endDate].getTime().toString()
        );
      } else {
        params.delete(ISSUED_OPTIONS_FILTERS.startDate);
        params.delete(ISSUED_OPTIONS_FILTERS.endDate);
      }

      if (filters?.[ISSUED_OPTIONS_FILTERS.tokenName]) {
        params.set(ISSUED_OPTIONS_FILTERS.tokenName, filters[ISSUED_OPTIONS_FILTERS.tokenName]);
      } else {
        params.delete(ISSUED_OPTIONS_FILTERS.tokenName);
      }

      router.push(pathName + '?' + params.toString());
    },
    [searchParams, pathName, router]
  );

  const providerValue = { ...DEFAULT_VALUE, filters, filteredData, applyFilters };

  return <ProviderElement value={providerValue}>{children}</ProviderElement>;
};

export default IssuedOptionsProvider;
