import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/cartSlice';
import wishListReducer from '../features/wishList/wishListSlice';
//import localStorageReducer from '../features/localStorage/localStorageSlice';
import compareReducer from '../features/compare/compareSlice';
import quickViewReducer from '../features/quickView/quickViewSlice';
import { productApi } from '../api/productApi';
import { cartApi } from '../api/cartApi';
import { categoryApi } from '../api/categoryApi';


export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    counter: counterReducer,
    cart: cartReducer,
    wishList: wishListReducer,
    compare: compareReducer,
    quickView: quickViewReducer,
    // localStorage: localStorageReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware, cartApi.middleware, categoryApi.middleware),
});
