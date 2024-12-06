'use client';

import { FC, useCallback, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import {
  IOptionsHistoryContext,
  IProvider,
  TApplyFilters,
  TFilters,
} from '@/context/options-history/types';

import optionsHistoryContext from '@/context/options-history/context';
import { DATE_KEYS, KEYS } from '@/context/options-history/keys';
import { DEFAULT_VALUE } from '@/context/options-history/defaultValues';
import { tokenApi } from '@/api/tokenApi';
import { OPTIONS_HISTORY_FILTERS } from '@/constants/filters';

const OptionsHistoryProvider: FC<IProvider> = ({ children }) => {
  const ProviderElement = optionsHistoryContext.Provider;

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

  const filteredData = useMemo(() => {
    if (!data) return [];

    if (!filters?.[OPTIONS_HISTORY_FILTERS.tokenName]) return data;

    return data.filter((item) =>
      item.info.symbol
        .toLowerCase()
        .includes(filters[OPTIONS_HISTORY_FILTERS.tokenName].trim().toLowerCase())
    );
  }, [data, filters]);

  const applyFilters: TApplyFilters = useCallback(
    (filters) => {
      const params = new URLSearchParams(searchParams.toString());

      if (!filters) {
        KEYS.forEach((key) => params.delete(key));
      }

      if (
        filters?.[OPTIONS_HISTORY_FILTERS.startDate] &&
        filters?.[OPTIONS_HISTORY_FILTERS.endDate]
      ) {
        params.set(
          OPTIONS_HISTORY_FILTERS.startDate,
          filters[OPTIONS_HISTORY_FILTERS.startDate].getTime().toString()
        );
        params.set(
          OPTIONS_HISTORY_FILTERS.endDate,
          filters[OPTIONS_HISTORY_FILTERS.endDate].getTime().toString()
        );
      } else {
        params.delete(OPTIONS_HISTORY_FILTERS.startDate);
        params.delete(OPTIONS_HISTORY_FILTERS.endDate);
      }

      if (filters?.[OPTIONS_HISTORY_FILTERS.tokenName]) {
        params.set(OPTIONS_HISTORY_FILTERS.tokenName, filters[OPTIONS_HISTORY_FILTERS.tokenName]);
      } else {
        params.delete(OPTIONS_HISTORY_FILTERS.tokenName);
      }

      if (filters?.[OPTIONS_HISTORY_FILTERS.optionType]) {
        params.set(OPTIONS_HISTORY_FILTERS.optionType, filters[OPTIONS_HISTORY_FILTERS.optionType]);
      } else {
        params.delete(OPTIONS_HISTORY_FILTERS.optionType);
      }

      router.push(pathName + '?' + params.toString());
    },
    [searchParams, pathName, router]
  );

  const providerValue: IOptionsHistoryContext = {
    ...DEFAULT_VALUE,
    filters,
    filteredData,
    applyFilters,
  };

  return <ProviderElement value={providerValue}>{children}</ProviderElement>;
};

export default OptionsHistoryProvider;
