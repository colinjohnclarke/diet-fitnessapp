import { createSlice } from "@reduxjs/toolkit";

export const favouriterecipieSlice = createSlice({
  name: "favouriterecipie",
  initialState: {
    value: null,
  },
  reducers: {
    addrecipiefavourite: (state, action) => {
      // state.favouriteRecipiesList.value.push(action.payload);
      console.log(`addrecpipieaction dispatch`);
    },
  },
});

export const { addrecipiefavourite } = favouriterecipieSlice.actions;

export const selectrecipie = (state) => state;

export default favouriterecipieSlice.reducer;
