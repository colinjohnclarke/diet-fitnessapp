import { createSlice } from "@reduxjs/toolkit";

export const favouriterecipieSlice = createSlice({
  name: "favouriterecipie",
  initialState: {
    value: [],
  },
  reducers: {
    addrecipiefavourite: (state, action) => {
      state.value = [...state.value, action.payload];
      console.log(state.value);
    },
    deleteFavouriteRecipie: (state, action) => {
      const ItemID = action.payload;
      console.log(ItemID);
      state.value = state.value.filter((item) => item !== ItemID);
      console.log(state.value);
    },
  },
});

export const { addrecipiefavourite, deleteFavouriteRecipie } =
  favouriterecipieSlice.actions;

export const selectrecipie = (state) => state.value;

export default favouriterecipieSlice.reducer;
