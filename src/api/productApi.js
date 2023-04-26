import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:3002' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/product`,
    }),
  }),
});

export const { useGetProductsQuery } = productApi