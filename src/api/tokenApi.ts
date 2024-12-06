import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICategory, IToken } from '@/types/token';

export const tokenApi = createApi({
  reducerPath: 'tokenAPI',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (build) => ({
    fetchTokens: build.query<IToken[], void>({
      query: () => ({
        url: '/tokens',
      }),
    }),
    fetchCategories: build.query<ICategory, void>({
      query: () => ({
        url: '/categories',
      }),
    }),
  }),
});
