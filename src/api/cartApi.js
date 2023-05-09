import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: " http://localhost:3002" }),
  endpoints: (builder) => ({
    addProductsToCart: builder.mutation({
      query: (data) => ({
        url: `/cart`,
        method: "POST",
        body: {
          id: data.id,
          cartDiscountId: 1,
          clientId: 1,
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    getCart: builder.query({
      query: () => `/cart`,
    }),
    addCartProduct: builder.mutation({
      query: (id) => {console.log({id}) 
      return({
        url: `/cart_Product`,
        method: "POST",
        body: {
          cartId:id.cartId,
          productId: id.productId,
          quantity: 1,
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
    }
    }),

    getCartProduct: builder.query({
      query: () => `/cart_Product`,
    }),
    updateCartProduct: builder.mutation({
     query: ({id, quantity}) => {
      console.log({id, quantity});
      return ({
        url: `cart_Product/${id}`,
        method: 'PATCH',
        body: { quantity },
      })
     }
    }),

    deleteFromCart: builder.mutation({
      query: ({ id }) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
    }),
    deleteFromCart_Product: builder.mutation({
      query: ({ id }) => ({
        url: `/cart_product/${id}`,
        method: "DELETE",
      }),
    }),
    clearCart: builder.mutation({
      query: () => ({
        url: "/cart",
        method: "DELETE",
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
  useUpdateCartProductMutation,
} = cartApi;
