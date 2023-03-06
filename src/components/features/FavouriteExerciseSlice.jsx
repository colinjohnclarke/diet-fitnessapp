import { createSlice } from "@reduxjs/toolkit";

export const favouriteExerciseSlice = createSlice({
  name: "favouriteExercise",
  initialState: {
    value: [],
  },
  reducers: {
    addFavouriteExercise: (state, action) => {
      state.value = [...state.value, action.payload];
      console.log(state.value);
    },
    deleteFavouriteExercise: (state, action) => {
      const itemID = action.payload;
      console.log(itemID);
      state.value = state.value.filter((item) => item.id !== itemID);
    },
  },
});

export const { addFavouriteExercise, deleteFavouriteExercise } =
  favouriteExerciseSlice.actions;

export const selectexercises = (state) => state.value;

export default favouriteExerciseSlice.reducer;
