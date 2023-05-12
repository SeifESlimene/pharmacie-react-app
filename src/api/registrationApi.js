import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const registrationApi = createApi({
  reducerPath: "registration",
  baseQuery: fetchBaseQuery({  baseUrl: " http://localhost:3002"}),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: "/Account",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registrationApi;
