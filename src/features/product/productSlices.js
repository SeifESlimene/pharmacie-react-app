import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filterProductList } from "../../util/filterProduct";


const initialState = {
    products: [],
    status: "idle",
    error: null,
  };
  
  export const fetchProductsByCategory = createAsyncThunk(
    "products/fetchByCategory",
    async ({ url, filters }, thunkAPI) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const filteredList = filterProductList(data, filters);
        return filteredList;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
      // add any other reducers here
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchProductsByCategory.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.products = action.payload;
        })
        .addCase(fetchProductsByCategory.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        });
    },
  });
  
  export default productsSlice.reducer;
