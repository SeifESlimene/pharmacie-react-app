import { createSlice, current } from '@reduxjs/toolkit';
import { findProductIndexById } from '../../util/util';

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
    
  },
});

export const { addToCart } = cartSlice.actions;

export const selectCartProductsCount = (state) => state.cart.length;

export const selectCartProducts = (state) => state.cart;

export default cartSlice.reducer;
