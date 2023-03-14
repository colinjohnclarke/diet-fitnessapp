import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "../components/features/UserSlice2";
import authReducer from "../components/features/auth/authSlice";
import { apiSlice } from "../components/features/api/apiSlice";
import addrecipiefavouriteReducer from "../components/features/Favouriteslice";
import addFavouriteExerciseReducer from "../components/features/FavouriteExerciseSlice";
import { exerciseSlice } from "../components/features/api/exerciseSlice";
import { recipiesSlice } from "../components/features/api/recipiesSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [recipiesSlice.reducerPath]: recipiesSlice.reducer,
    [exerciseSlice.reducerPath]: exerciseSlice.reducer,

    user: userReducer,
    // addrecipiefavouriteReducer,
    // addFavouriteExerciseReducer,
    // auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(recipiesSlice.middleware)
      .concat(exerciseSlice.middleware),
});
