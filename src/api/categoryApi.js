import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:3004' }),
  endpoints: (builder) => ({
    getCategorys: builder.query({
      query: () => `/category`,
    }),
  getSubCategorys: builder.query({
    query: () => `/SubCategory`,
  }),
}),
});
console.log(categoryApi);

export const { useGetCategorysQuery, useGetSubCategorysQuery  } = categoryApi