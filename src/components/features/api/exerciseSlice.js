import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const exerciseSlice = createApi({
  reducerPath: "exerciseSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3600" }),
  tagTypes: ["Exercises"],
  endpoints: (builder) => ({
    getExercises: builder.query({
      query: () => "/favouriteexercises",
      providesTags: ["Exercises"],
    }),
    addExercise: builder.mutation({
      query: (exercise) => ({
        url: "/favouriteexercises",
        method: "POST",
        body: exercise,
      }),
      invalidatesTags: ["Exercises"],
    }),
    deleteExercisefromDB: builder.mutation({
      query: ({ _id }) => ({
        url: "/favouriteexercises",
        method: "DELETE",
        body: { _id },
      }),
      InvalidatesTags: ["Exercises"],
    }),
  }),
});

export const {
  useGetExercisesQuery,
  useAddExerciseMutation,
  useDeleteExercisefromDBMutation,
} = exerciseSlice;
