import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/cartSlice';
import wishListReducer from '../features/wishList/wishListSlice';
import localStorageReducer from '../features/localStorage/localStorageSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    wishList: wishListReducer,
    localStorage: localStorageReducer
  },
});
