import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../reducer/countSlice";
import fetchReducer from "../reducer/fetchSlice";

export default configureStore({
  reducer: { countReducer, fetchReducer },
  devTools: process.env.NODE_ENV !== "production",
});
