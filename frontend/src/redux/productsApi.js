import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5500/api/v1/" }),
  endpoints: (builder) => ({
    getAllItems: builder.query({
      query: () => "items",
    }),
  }),
});

export const { useGetAllItemsQuery } = productsApi;
