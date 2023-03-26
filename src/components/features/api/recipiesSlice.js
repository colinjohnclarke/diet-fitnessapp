import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipiesSlice = createApi({
  reducerPath: "recipiesSlice",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3600` }),
  tagTypes: ["Recipies"],
  endpoints: (builder) => ({
    getRecipies: builder.query({
      query: () => "/favouriterecipies",
      providesTags: ["Recipies"],
    }),
    addRecipie: builder.mutation({
      query: (recipie) => ({
        url: "/favouriterecipies",
        method: "POST",
        body: recipie,
      }),
      invalidatesTags: ["Recipies"],
    }),
    deleteRecipie: builder.mutation({
      query: ({ id }) => ({
        url: "/favouriterecipies",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["Recipies"],
    }),
  }),
});

export const {
  useGetRecipiesQuery,
  useAddRecipieMutation,
  useDeleteRecipieMutation,
} = recipiesSlice;
