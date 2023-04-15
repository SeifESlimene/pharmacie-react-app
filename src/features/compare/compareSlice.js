import { createSlice } from "@reduxjs/toolkit";
import { findProductIndexById, deleteProduct } from "../../util/util";
import storage from "../../util/localStorage";

const initialState = [];
let index = null;

export const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    initLocalStorage: (_, action) => {
      return action.payload.compare;
    },
    addToCompare: (state, action) => {
      index = findProductIndexById(state, action.payload.id);
      if (index === -1) {
        //action.payload.quantity = 1;
        storage.set("dokani_wishlist", action.payload);
        state.push(action.payload);
      }
    },
    deleteFromCompare: (state, action) => {
      const newCartItems = deleteProduct(state, action.payload);
      storage.set("dokani_cart", newCartItems);
      return newCartItems;
    },
    clearCompare: () => {
      storage.set("dokani_wishlist", []);
      return initialState;
    },
  },
});

export const { addToCompare, deleteFromCompare, clearCompare } =
  compareSlice.actions;

export const selectCompareProductsCount = (state) => state.compare.length;

export const selectCompareProducts = (state) => state.compare;

export default compareSlice.reducer;
