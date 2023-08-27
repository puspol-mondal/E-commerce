import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProduct } from "./productListApi";

export const incrementAsync = createAsyncThunk(
  "product/fetchProduct",
  async (amount) => {
    const response = await fetchProduct(amount);
    return response.data;
  }
);
