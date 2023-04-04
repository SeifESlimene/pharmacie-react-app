import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import Cart from "./pages/shop-cart";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StorageWrapper from "./components/ecommerce/storage-wrapper";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Wishlist from "./pages/shop-wishlist";
import Compare from "./pages/shop-compare";

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/shop-cart" element={<Cart />} />
      <Route path="/shop-Wishlist" element={<Wishlist />} />
      <Route path="/shop-compare" element={<Compare />} />
      {/* ... etc. */}
    </>
  )
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StorageWrapper>
        <RouterProvider router={router} />
        <ToastContainer autoClose={1000} />
      </StorageWrapper>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
