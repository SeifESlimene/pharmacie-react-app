import React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import {
  useGetCartQuery,
  useDeleteFromCartMutation,
  useDeleteFromCart_ProductMutation,
  useClearCartMutation,
  useGetCartProductQuery,
  useUpdateCartProductMutation,
} from "../api/cartApi";
import { useGetProductsQuery } from "../api/productApi";

const Cart = () => {
  const { data: cartProducts = [] } = useGetCartQuery();
  const { data: products = [] } = useGetProductsQuery();
  const { data: Productcart = [] } = useGetCartProductQuery();
  const [deleteFromCart] = useDeleteFromCartMutation();
  const [deleteFromCart_Product] = useDeleteFromCart_ProductMutation();
  const [clearCart] = useClearCartMutation();
  const [updateCartProducts] = useUpdateCartProductMutation();

  const price = () => {
    let price = 0;
    products.forEach((item) => (price += item.price * filteredQuantities));

    return price;
  };

  const productId = Productcart.map((sub) => sub.id);

  const filteredProducts = products.filter((product) =>
    productId.includes(product.id)
  );

  const quantity = filteredProducts.map(
    (product, index) =>
      Productcart.find((item) => item.id === product.id)?.quantity ?? 0
  );
  const filteredQuantities = quantity.map((q, i) => ({
    quantity: q,
    index: i,
  }));

  const handleDeleteFromCart = (itemId) => {
    deleteFromCart_Product(itemId);
    deleteFromCart(itemId);
    window.location.reload();
  };
  const handleClearCart = () => {
    clearCart();
    window.location.reload();
  };
  const increaseQuantity = (itemId, quantity) => {
    const index = cartProducts.findIndex((item) => item.id === itemId);
    if (index === -1) return;
    const newQuantity = quantity + 1;
    updateCartProducts({ id: itemId, quantity: newQuantity });
    window.location.reload();
  };
  const decreaseQuantity = (itemId, quantity) => {
    const index = cartProducts.findIndex((item) => item.id === itemId);

    if (index === -1) return;
    const newQuantity = quantity - 1;

    updateCartProducts({ id: itemId, quantity: newQuantity });
    window.location.reload();
  };

  const cartProductsCount = cartProducts.length;

  return (
    <>
      <Layout parent="Home" sub="Shop" subChild="Cart">
        <section className="mt-50 mb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-40">
                <h1 className="heading-2 mb-10">Your Cart</h1>
                <div className="d-flex justify-content-between">
                  <h6 className="text-body">
                    There are{" "}
                    <span className="text-brand">{cartProductsCount}</span>{" "}
                    products in your cart
                  </h6>
                  <h6 className="text-body">
                    <a
                      href="#"
                      className="text-muted"
                      onClick={(e) => handleClearCart()}
                    >
                      <i className="fi-rs-trash mr-5"></i>
                      Clear Cart
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="table-responsive shopping-summery">
                  {cartProductsCount <= 0 && "No Products"}
                  <table
                    className={
                      cartProductsCount > 0 ? "table table-wishlist" : "d-none"
                    }
                  >
                    <thead>
                      <tr className="main-heading">
                        <th
                          className="custome-checkbox start pl-30"
                          colSpan="2"
                        >
                          Product
                        </th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col" className="end">
                          Remove
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts.map((item, i) => (
                        <tr key={i}>
                          <td className="image product-thumbnail">
                            <img src={item.image} alt="" />
                          </td>

                          <td className="product-des product-name">
                            <h6 className="product-name">
                              <Link to="/products">{item.name}</Link>
                            </h6>
                            <div className="product-rate-cover">
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{
                                    width: "90%",
                                  }}
                                ></div>
                              </div>
                              <span className="font-small ml-5 text-muted">
                                {" "}
                                (4.0)
                              </span>
                            </div>
                          </td>
                          <td className="price" data-title="Price">
                            <h4 className="text-brand">{item.price}DT</h4>
                          </td>
                          <td
                            className="text-center detail-info"
                            data-title="Stock"
                          >
                            <div className="detail-extralink mr-15">
                              <div className="detail-qty border radius ">
                                <a
                                  onClick={(e) =>
                                    decreaseQuantity(
                                      item.id,
                                      filteredQuantities[i].quantity
                                    )
                                  }
                                  className="qty-down"
                                >
                                  <i className="fi-rs-angle-small-down"></i>
                                </a>
                                <span className="qty-val">
                                  {filteredQuantities[i].quantity}
                                </span>

                                <a
                                  onClick={(e) =>
                                    increaseQuantity(
                                      item.id,
                                      filteredQuantities[i].quantity
                                    )
                                  }
                                  className="qty-up"
                                >
                                  <i className="fi-rs-angle-small-up"></i>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td className="text-right" data-title="Cart">
                            <h4 className="text-body">
                              {filteredQuantities[i].quantity * item.price}DT
                            </h4>
                          </td>
                          <td className="action" data-title="Remove">
                            <a
                              onClick={(e) => handleDeleteFromCart(item)}
                              className="text-muted"
                            >
                              <i className="fi-rs-trash"></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="cart-action text-end">
                  <a href="/" className="btn ">
                    <i className="fi-rs-shopping-bag mr-10"></i>
                    Continue Shopping
                  </a>
                </div>
                <div className="divider center_icon mt-50 mb-50">
                  <i className="fi-rs-fingerprint"></i>
                </div>
                <div className="row mb-50">
                  <div className="col-lg-6 col-md-12">
                    <div className="border p-md-4 p-30 border-radius cart-totals">
                      <div className="heading_s1 mb-3">
                        <h4>Cart Totals</h4>
                      </div>
                      <div className="table-responsive">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td className="cart_total_label">Total</td>
                              <td className="cart_total_amount">
                                <strong>
                                  <span className="font-xl fw-900 text-brand">
                                    {price()}DT
                                  </span>
                                </strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a href="#" className="btn ">
                        <i className="fi-rs-box-alt mr-10"></i>
                        Proceed To CheckOut
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="mb-30">
                      <div className="heading_s1 mb-3">
                        <h4>Apply Coupon</h4>
                      </div>
                      <div className="total-amount">
                        <div className="left">
                          <div className="coupon">
                            <form action="#" target="_blank">
                              <div className="form-row row justify-content-center align-items-center">
                                <div className="form-group col-lg-6">
                                  <input
                                    className="font-medium"
                                    name="Coupon"
                                    placeholder="Enter Your Coupon"
                                  />
                                </div>
                                <div className="form-group col-lg-6">
                                  <button className="btn  btn-sm">
                                    <i className="fi-rs-label mr-10"></i>
                                    Apply
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Cart;
