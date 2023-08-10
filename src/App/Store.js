import { configureStore } from "@reduxjs/toolkit";
import ProductReducers from "../Features/ProductSlice";

export const store = configureStore({
  reducer: {
    products: ProductReducers,
  },
});
