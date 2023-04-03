import { createSlice } from "@reduxjs/toolkit";
import { findProductIndexById, deleteProduct } from "../../util/util";
import storage from "../../util/localStorage";

const initialState = [];
let index = null;

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    initLocalStorage: (_, action) => {
      return action.payload.wishList;
    },
    addToWishList: (state, action) => {
      index = findProductIndexById(state, action.payload.id);
      if (index === -1) {
        action.payload.quantity = 1;
        storage.set("dokani_wishlist", action.payload)
        state.push(action.payload);
      }
    },
    deleteFromWishList: (state, action) => {
      const newWishListItems = deleteProduct(state, action.payload);
      storage.set("dokani_wishlist", newWishListItems)
      return newWishListItems;
    },
    clearWishList: () => {
      storage.set("dokani_wishlist", [])
      return initialState;
    },
  },
});

export const { addToWishList, deleteFromWishList, clearWishList } =
  wishListSlice.actions;

export const selectWishListProductsCount = (state) => state.wishList.length;

export const selectWishListProducts = (state) => state.wishList;

export default wishListSlice.reducer;
