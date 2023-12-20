import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ICatalogItem } from "@/types/catalogItem";

export const catalogItemApi = createApi({
  reducerPath: "api/catalogItems",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  endpoints: (build) => ({
    getCatalogItems: build.query<ICatalogItem[], number>({
      query: () => `catalogItems`,
    }),
  }),
});

export const { useGetCatalogItemsQuery } = catalogItemApi;
