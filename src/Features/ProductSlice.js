import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "../Utils/Base_URL";

const initialState = {
  isLoading: false,
  error: null,
  success: false,
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  //   reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;

        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Define fetchProducts here
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      // const response = await axios.get("https://fakestoreapi.com/products");
      const response = await axios.get(`${BASEURL}/api/products/allproducts`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export default productSlice.reducer;
