import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import Cart from './pages/shop-cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StorageWrapper from './components/ecommerce/storage-wrapper';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'react-responsive-modal/styles.css';
import Wishlist from './pages/shop-wishlist';
import Compare from './pages/shop-compare';
import Account from './pages/page-account';
import Login from './pages/page-login';
import Register from './pages/page-register';
import About from './pages/page-about';
import Product from './pages/products';
import Products from './pages/products';
import Test from './pages/test';

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} />
      <Route path='/shop-cart' element={<Cart />} />
      <Route path='/shop-Wishlist' element={<Wishlist />} />
      <Route path='/shop-compare' element={<Compare />} />
      <Route path='/page-account' element={<Account />} />
      <Route path='/page-login' element={<Login />} />
      <Route path='/page-register' element={<Register />} />
      <Route path='/page-about' element={<About />} />
      <Route path='/products/:slug' element={<Product />} />
      <Route path='/products' element={<Products />} />
      <Route path='/testdb' element={<Test />} />
    </>
  )
);

root.render(
  <Provider store={store}>
    <StorageWrapper>
      <RouterProvider router={router} />
      <ToastContainer autoClose={1000} />
    </StorageWrapper>
  </Provider>
);
