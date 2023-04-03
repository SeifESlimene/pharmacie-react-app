import { createSlice } from '@reduxjs/toolkit';
import { findProductIndexById, deleteProduct } from '../../util/util';

const initialState = [];
let index = null;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      index = findProductIndexById(state, action.payload.id);

      if (index !== -1) {
        state[index].quantity += 1;
      } else {
        if (!action.payload.quantity) {
          action.payload.quantity = 1;
        }
        state.push(action.payload);
      }
    },
    deleteFromCart: (state, action) => {
      const newCartItems = deleteProduct(state, action.payload);
      return newCartItems;
    },
    increaseQuantity: (state, action) => {
      index = findProductIndexById(state, action.payload);
      if (index === -1) return state;
      state[index].quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      index = findProductIndexById(state, action.payload);
      if (index === -1) return state;
      const quantity = state[index].quantity;
      if (quantity > 1) state[index].quantity -= 1;
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export const selectCartProductsCount = (state) => state.cart.length;

export const selectCartProducts = (state) => state.cart;

export default cartSlice.reducer;
