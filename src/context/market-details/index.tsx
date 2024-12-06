'use client';

import { FC, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import marketDetailsContext from '@/context/market-details/context';
import { IProvider, TFilters, TFiltersApply } from '@/context/market-details/types';
import { DEFAULT_VALUE } from '@/context/market-details/defaultValue';
import { KEYS, DATE_KEYS } from '@/context/market-details/keys';
import { MARKET_DETAILS_FILTERS } from '@/constants/filters';

const MarketDetailsProvider: FC<IProvider> = ({ children }) => {
  const ProviderElement = marketDetailsContext.Provider;

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

  const applyFilters: TFiltersApply = (filters) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!filters) {
      KEYS.forEach((key) => params.delete(key));
    }

    if (
      filters?.[MARKET_DETAILS_FILTERS.strikePriceFrom] &&
      filters?.[MARKET_DETAILS_FILTERS.strikePriceTo]
    ) {
      params.set(
        MARKET_DETAILS_FILTERS.strikePriceFrom,
        filters[MARKET_DETAILS_FILTERS.strikePriceFrom]
      );
      params.set(
        MARKET_DETAILS_FILTERS.strikePriceTo,
        filters[MARKET_DETAILS_FILTERS.strikePriceTo]
      );
    } else {
      params.delete(MARKET_DETAILS_FILTERS.strikePriceFrom);
      params.delete(MARKET_DETAILS_FILTERS.strikePriceTo);
    }

    if (
      filters?.[MARKET_DETAILS_FILTERS.volumeFrom] &&
      filters?.[MARKET_DETAILS_FILTERS.volumeTo]
    ) {
      params.set(MARKET_DETAILS_FILTERS.volumeFrom, filters[MARKET_DETAILS_FILTERS.volumeFrom]);
      params.set(MARKET_DETAILS_FILTERS.volumeTo, filters[MARKET_DETAILS_FILTERS.volumeTo]);
    } else {
      params.delete(MARKET_DETAILS_FILTERS.volumeFrom);
      params.delete(MARKET_DETAILS_FILTERS.volumeTo);
    }

    if (
      filters?.[MARKET_DETAILS_FILTERS.expStartDate] &&
      filters?.[MARKET_DETAILS_FILTERS.expEndDate]
    ) {
      params.set(
        MARKET_DETAILS_FILTERS.expStartDate,
        filters[MARKET_DETAILS_FILTERS.expStartDate].getTime().toString()
      );
      params.set(
        MARKET_DETAILS_FILTERS.expEndDate,
        filters[MARKET_DETAILS_FILTERS.expEndDate].getTime().toString()
      );
    } else {
      params.delete(MARKET_DETAILS_FILTERS.expStartDate);
      params.delete(MARKET_DETAILS_FILTERS.expEndDate);
    }

    router.push(pathName + '?' + params.toString());
  };

  const providerValue = { ...DEFAULT_VALUE, filters, applyFilters };

  return <ProviderElement value={providerValue}>{children}</ProviderElement>;
};

export default MarketDetailsProvider;
