import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: " http://localhost:3002" }),
  endpoints: (builder) => ({
    addOrder: builder.mutation({
      query: (data) => ({
        url: `/order`,
        method: "POST",
        body: {
          id: data.id,
          ordeDate: "26/01/2023",
          orderStatutId:"en attante",
          cartId:1,
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    getOrder: builder.query({
      query: () => `/order`,
    }),
    getOrderStatus: builder.query({
      query: () => ({
        url: "/order-status",
        method: "GET",
      }),
    }),
  }),
});
export const { useAddOrderMutation, useGetOrderQuery, useGetOrderStatusQuery } = orderApi;
