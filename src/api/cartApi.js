import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import cartSlice, { addToCart } from '../features/cart/cartSlice';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:3004' }),
  endpoints: (builder) => ({
    addProductsToCart: builder.mutation({
      query: (data) => ({
        url: `/cart`,
        method: 'POST',
        body: {
          id: data.id,
          listproduct: data,
          cartDiscountId: 1,
          clientId: 1,  
        },
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      
      // onSuccess:(data,{dispatch})=> {
      //   dispatch(cartSlice.actions.addToCart(data));
      // },
    }),
    getCart: builder.query({
      query: () => `/cart`,
  
  }),
    addCartProduct: builder.mutation({
      query: (data) => ({
        url: `/cart_Product`,
        method: 'POST',
        body: {
          id: data.id,
          quantiye: 1,
        
        },
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      
      // onSuccess:(data,{dispatch})=> {
      //   dispatch(cartSlice.actions.addToCart(data));
      // },
    }),

    getCartProduct: builder.query({
      query: (id) => { console.log({ id }); return `/cart/${id}?_embed=cart_Product` },
    }),
  
    deleteFromCart: builder.mutation({
    query: ({ id }) => ({
      url: `/cart/${id}`,
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
export const { useAddProductsToCartMutation, useDeleteFromCartMutation, useClearCartMutation, useAddCartProductMutation, useGetCartProductQuery,useGetCartQuery  } = cartApi;
