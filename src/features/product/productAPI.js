export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchByCategory',
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

// A mock function to mimic making an async request for data
// export function fetchCount(amount = 1) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve({ data: amount }), 500)
//   );
// }
