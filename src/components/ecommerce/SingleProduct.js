import { Link } from 'react-router-dom';
import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { addToWishList } from '../../features/wishList/wishListSlice';
import { addToCompare } from '../../features/compare/compareSlice';
import { openQuickView } from '../../features/quickView/quickViewSlice';

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleCart = (product) => {
    dispatch(addToCart(product));
    toast('Product added to Cart !');
  };

  const handleCompare = (product) => {
    dispatch(addToCompare(product));
    toast('Added to Compare list !');
  };

  const handleWishlist = (product) => {
    dispatch(addToWishList(product));
    toast('Added to Wishlist !');
  };
  return (
    <>
      <div className='product-cart-wrap mb-30'>
        <div className='product-img-action-wrap'>
          <div className='product-img product-img-zoom'>
            <Link to={`/products/${product.slug}`}>
              <img className='default-img' src={product.images[0].img} alt='' />
              <img className='hover-img' src={product.images[1].img} alt='' />
            </Link>
          </div>
          <div className='product-action-1'>
            <a
              aria-label='Quick view'
              className='action-btn hover-up'
              data-bs-toggle='modal'
              onClick={(e) => dispatch(openQuickView(product))}
            >
              <i className='fi-rs-eye'></i>
            </a>
            <a
              aria-label='Add To Wishlist'
              className='action-btn hover-up'
              onClick={(e) => handleWishlist(product)}
            >
              <i className='fi-rs-heart'></i>
            </a>
            <a
              aria-label='Compare'
              className='action-btn hover-up'
              onClick={(e) => handleCompare(product)}
            >
              <i className='fi-rs-shuffle'></i>
            </a>
          </div>

          <div className='product-badges product-badges-position product-badges-mrg'>
            {product.trending && <span className='hot'>Hot</span>}
            {product.created && <span className='new'>New</span>}
            {product.totalSell > 100 && <span className='best'>Best Sell</span>}
            {product.discount.isActive && <span className='sale'>Sale</span>}
            {product.discount.percentage >= 5 && (
              <span className='hot'>{product.discount.percentage}%</span>
            )}
          </div>
        </div>
        <div className='product-content-wrap'>
          <div className='product-category'>
            <Link to='/products'>{product.brand}</Link>
          </div>
          <h2>
            <Link to={`/products/${product.slug}`}>{product.title}</Link>
          </h2>

          <div className='product-rate-cover'>
            <div className='product-rate d-inline-block'>
              <div className='product-rating' style={{ width: '90%' }}></div>
            </div>
            <span className='font-small ml-5 text-muted'>
              {' '}
              ({product.ratingScore})
            </span>
          </div>

          <div>
            <span className='font-small text-muted'>
              By <Link to='/vendor/1'>NestFood</Link>
            </span>
          </div>

          <div className='product-card-bottom'>
            <div className='product-price'>
              <span>${product.price} </span>
              <span className='old-price'>
                {product.oldPrice && `$ ${product.oldPrice}`}
              </span>
            </div>
            <div className='add-cart'>
              <a className='add' onClick={(e) => handleCart(product)}>
                <i className='fi-rs-shopping-cart mr-5'></i> Add
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
