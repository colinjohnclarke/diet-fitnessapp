import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "../components/features/UserSlice2";
import authReducer from "../components/features/auth/authSlice";
import { apiSlice } from "../components/features/api/apiSlice";
import addrecipiefavouriteReducer from "../components/features/Favouriteslice";
import addFavouriteExerciseReducer from "../components/features/FavouriteExerciseSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
    addrecipiefavouriteReducer,
    addFavouriteExerciseReducer,
    // auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
