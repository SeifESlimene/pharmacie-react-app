import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import cartSlice, { addToCart } from '../features/cart/cartSlice';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:3002' }),
  endpoints: (builder) => ({
    addProductsToCart: builder.mutation({
      query: (data) => ({
        url: `/cart`,
        method: 'POST',
        body: {
          id: data.id,
          cartDiscountId: 1,
          clientId: 1,
        },
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    getCart: builder.query({
      query: () => `/cart`,
    }),
    addCartProduct: builder.mutation({
      query: (id) => ({
        url: `/cart_Product`,
        method: 'POST',
        body: {
          cartId: 1,
          productId:id,
          quantity: 1,
        },
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),

    getCartProduct: builder.query({
      query: (id) => `/cart_Product`,
    }),

    deleteFromCart: builder.mutation({
      query: ({ id }) => ({
        url: `/cart/${id}`,
        method: 'DELETE',
      }),
    }),
    deleteFromCart_Product: builder.mutation({
      query: ({ id }) => ({
        url: `/cart_product/${id}`,
        method: 'DELETE',
      }),
    }),
    clearCart: builder.mutation({
      query: () => ({
        url: '/cart',
        method: 'DELETE',
      }),
    }),
  }),
});
export const {
  useAddProductsToCartMutation,
  useDeleteFromCartMutation,
  useDeleteFromCart_ProductMutation,
  useClearCartMutation,
  useAddCartProductMutation,
  useGetCartProductQuery,
  useGetCartQuery,
} = cartApi;
