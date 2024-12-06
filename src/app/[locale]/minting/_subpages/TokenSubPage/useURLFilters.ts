import { useCallback, useMemo, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { IToken } from '@/types/token';
import { IUseURLFilters } from '@/app/[locale]/minting/_subpages/TokenSubPage/types';
import { SEARCH_PARAMS } from '@/constants/common';
import { filterName, filterVerified } from '@/helpers/tokenFilters';

export default function useURLFilters(data?: IToken[]): IUseURLFilters {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  // Set tokenVerified value to true as a default value if there is no any
  useEffect(() => {
    if (searchParams.get(SEARCH_PARAMS.tokenVerified)) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set(SEARCH_PARAMS.tokenVerified, true.toString());

    router.push(pathName + '?' + params);
  }, [searchParams, pathName, router]);

  const tokenName = searchParams.get(SEARCH_PARAMS.tokenName) ?? '';

  const tokenVerified =
    String(searchParams.get(SEARCH_PARAMS.tokenVerified)).toLowerCase() === 'true';

  const filteredTokens = useMemo(() => {
    if (!data) return [];

    return data
      .filter((token) => filterName(token, tokenName))
      .filter((token) => filterVerified(token, tokenVerified));
  }, [data, tokenName, tokenVerified]);

  const handleToggle = useCallback(
    (value: boolean) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set(SEARCH_PARAMS.tokenVerified, value.toString());

      router.push(pathName + '?' + params);
    },
    [searchParams, router, pathName]
  );

  const handleSearch = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set(SEARCH_PARAMS.tokenName, value.toString());
      } else {
        params.delete(SEARCH_PARAMS.tokenName);
      }

      router.push(pathName + '?' + params);
    },
    [searchParams, router, pathName]
  );

  return {
    filteredTokens,
    handleSearch,
    handleToggle,
    filtersValue: { tokenName, tokenVerified },
  };
}
