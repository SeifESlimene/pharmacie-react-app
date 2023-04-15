import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:3004' }),
  endpoints: (builder) => ({
    addProductsToCart: builder.mutation({
      query: (data, quantity) => ({
        url: `/cart`,
        method: 'POST',
        body: {
          id: data.id,
          listproduct: data,
          cartDiscountId: 1,
          clientId: 1,
          quantity:1
        },
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),

    getCartProduct: builder.query({
      query: (id) => `/cart/${id}?_embed=cart_Product`,
    }),
  }),
});
export const { useAddProductsToCartMutation, useGetCartProductQuery } = cartApi;
