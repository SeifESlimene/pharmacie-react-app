import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/cartSlice';
import wishListReducer from '../features/wishList/wishListSlice';
//import localStorageReducer from '../features/localStorage/localStorageSlice';
import compareReducer from '../features/compare/compareSlice';
import quickViewReducer from '../features/quickView/quickViewSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    wishList: wishListReducer,
    compare: compareReducer,
    quickView: quickViewReducer
   // localStorage: localStorageReducer
  },
});
