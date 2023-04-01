import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
import Search from '../ecommerce/Search';
import { Link } from 'react-router-dom';
import compareIcon from '../../imgs/theme/icons/icon-compare.svg'
import hotIcon from '../../imgs/theme/icons/icon-hot.svg'
import icon4 from '../../imgs/theme/icons/icon-4.svg'
import icon3 from '../../imgs/theme/icons/icon-3.svg'
import icon2 from '../../imgs/theme/icons/icon-2.svg'
import icon1 from '../../imgs/theme/icons/icon-1.svg'
import logo from '../../imgs/theme/logo.svg'
import userIcon from '../../imgs/theme/icons/icon-user.svg'
import cartIcon from '../../imgs/theme/icons/icon-cart.svg'
import heartIcon from '../../imgs/theme/icons/icon-heart.svg'
import flagFr from '../../imgs/theme/flag-fr.png'
import CategoryProduct2 from '../ecommerce/Filter/CategoryProduct2';
import CategoryProduct3 from '../ecommerce/Filter/CategoryProduct3';

const Header = ({
  // totalCartItems,
  // totalCompareItems,
  toggleClick,
  // totalWishlistItems,
}) => {
  const [isToggled, setToggled] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY >= 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  const handleToggle = () => setToggled(!isToggled);

  return (
    <>
      <header className='header-area header-style-1 header-height-2'>
        <div className='mobile-promotion'>
          <span>
            Grand opening, <strong>up to 15%</strong> off all items. Only{' '}
            <strong>3 days</strong> left
          </span>
        </div>
        <div className='header-top header-top-ptb-1 d-none d-lg-block'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-xl-3 col-lg-4'>
                <div className='header-info'>
                  <ul>
                    <li>
                      <Link to='/page-about'>A propos</Link>
                    </li>
                    <li>
                      <Link to='/page-account'>Mon Compte</Link>
                    </li>
                    <li>
                      <Link to='/shop-wishlist'>Favories</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-xl-6 col-lg-4'>
                <div className='text-center'>
                  <div id='news-flash' className='d-inline-block'>
                    <ul>
                      <li>
                        Get great devices up to 50% off
                        <Link href='/shop-grid-right'>
                          View details
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-4'>
                <div className='header-info header-info-right'>
                  <ul>
                    <li>
                      <Link className='language-dropdown-active' to='/#'>
                        <i className='fi-rs-world'></i>
                        English
                        <i className='fi-rs-angle-small-down'></i>
                      </Link>
                      <ul className='language-dropdown'>
                        <li>
                          <Link to='/#'>
                            <img src={flagFr} alt='' />
                            Français
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className='language-dropdown-active' href='#'>
                        DT <i className='fi-rs-angle-small-down'></i>
                      </a>
                      <ul className='language-dropdown'>
                        <li>
                          <a href='#'>
                            <img src={flagFr} alt='' />
                            EUR
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='header-middle header-middle-ptb-1 d-none d-lg-block'>
          <div className='container'>
            <div className='header-wrap'>
              <div className='logo logo-width-1'>
                <Link to='/'>
                  {/* <img src='../../imgs/theme/logo.svg' alt='logo' /> */}
                </Link>
              </div>
              <div className='header-right'>
                <div className='search-style-2'>
                  <Search />
                </div>
                <div className='header-action-right'>
                  <div className='header-action-2'>
                    {/* <div className='search-location'>
                      <form action='#'>
                        <select className='select-active'>
                          <option>Your Location</option>
                          <option>Alabama</option>
                          <option>Alaska</option>
                          <option>Arizona</option>
                          <option>Delaware</option>
                          <option>Florida</option>
                          <option>Georgia</option>
                          <option>Hawaii</option>
                          <option>Indiana</option>
                          <option>Maryland</option>
                          <option>Nevada</option>
                          <option>New Jersey</option>
                          <option>New Mexico</option>
                          <option>New York</option>
                        </select>
                      </form>
                    </div> */}
                    <div className='header-action-icon-2'>
                      <Link to='/shop-compare'>
                        <img
                          className='svgInject'
                          alt='Evara'
                          src={compareIcon}
                        />
                        <span className='pro-count blue'>
                          {/* {totalCompareItems} */}
                        </span>
                      </Link>
                      <Link to='/shop-compare'>
                        <span className='lable ml-0'>Comparer</span>
                      </Link>
                    </div>
                    <div className='header-action-icon-2'>
                      <Link to='/shop-wishlist'>
                        <img
                          className='svgInject'
                          alt='Evara'
                          src={heartIcon}
                        />
                        <span className='pro-count blue'>
                          {/* {totalWishlistItems} */}
                        </span>
                      </Link>
                      <Link to='/shop-wishlist'>
                        <span className='lable'>Favories</span>
                      </Link>
                    </div>
                    <div className='header-action-icon-2'>
                      <Link className='mini-cart-icon' to='/shop-cart'>
                        <img
                          alt='Evara'
                          src={cartIcon}
                        />
                        <span className='pro-count blue'>
                          {/* {totalCartItems} */}
                        </span>
                      </Link>
                      <Link to='/shop-cart'>
                        <span className='lable'>Panier</span>
                      </Link>
                    </div>

                    <div className='header-action-icon-2'>
                      <Link to='/page-account'>
                        <img
                          className='svgInject'
                          alt='Nest'
                          src={userIcon}
                        />
                      </Link>
                      <Link to='/page-account'>
                        <span className='lable ml-0'>Compte</span>
                      </Link>
                      <div className='cart-dropdown-wrap cart-dropdown-hm2 account-dropdown'>
                        <ul>
                          <li>
                            <Link to='/page-account'>
                              <i className='fi fi-rs-user mr-10'></i>
                              Mon Compte
                            </Link>
                          </li>
                          <li>
                            <Link to='/page-account'>
                              <i className='fi fi-rs-label mr-10'></i>
                              Mon Coupon
                            </Link>
                          </li>
                          <li>
                            <Link to='/shop-wishlist'>
                              <i className='fi fi-rs-heart mr-10'></i>
                              Mon liste d'envie
                            </Link>
                          </li>
                          <li>
                            <Link to='/page-account'>
                              <i className='fi fi-rs-settings-sliders mr-10'></i>
                              Paramètres
                            </Link>
                          </li>
                          <li>
                            <Link to='/page-login'>
                              <i className='fi fi-rs-sign-out mr-10'></i>
                              Déconnecter
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            scroll
              ? 'header-bottom header-bottom-bg-color sticky-bar stick'
              : 'header-bottom header-bottom-bg-color sticky-bar'
          }
        >
          <div className='container'>
            <div className='header-wrap header-space-between position-relative'>
              <div className='logo logo-width-1 d-block d-lg-none'>
                {/* <Link to='/'>
                  <img src='../../imgs/theme/logo.svg' alt='logo' />
                </Link> */}
              </div>
              <div className='header-nav d-none d-lg-flex'>
                <div className='main-categori-wrap d-none d-lg-block'>
                  <a
                    className='categories-button-active'
                    onClick={handleToggle}
                  >
                    <span className='fi-rs-apps'></span>
                    <span className='et'>Naviguer</span> Tous les categories
                    <i className='fi-rs-angle-down'></i>
                  </a>

                  <div
                    className={
                      isToggled
                        ? 'categories-dropdown-wrap categories-dropdown-active-large font-heading open'
                        : 'categories-dropdown-wrap categories-dropdown-active-large font-heading'
                    }
                  >
                    <div className='d-flex categori-dropdown-inner'>
                      <CategoryProduct2 />
                      <CategoryProduct3 />
                    </div>
                    <div
                      className='more_slide_open'
                      style={{ display: 'none' }}
                    >
                      <div className='d-flex categori-dropdown-inner'>
                        <ul>
                          <li>
                            <Link to='/products'>
                              {' '}
                              <img
                                src={icon1}
                                alt=''
                              />
                              Milks and Dairies
                            </Link>
                          </li>
                          <li>
                            <Link to='/products'>
                              {' '}
                              <img
                                src={icon2}
                                alt=''
                              />
                              Clothing & beauty
                            </Link>
                          </li>
                        </ul>
                        <ul className='end'>
                          <li>
                            <Link to='/products'>
                              {' '}
                              <img
                                src={icon3}
                                alt=''
                              />
                              Wines & Drinks
                            </Link>
                          </li>
                          <li>
                            <Link to='/products'>
                              {' '}
                              <img
                                src={icon4}
                                alt=''
                              />
                              Fresh Seafood
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='more_categories'>
                      <span className='icon'></span>{' '}
                      <span className='heading-sm-1'>Voir Plus...</span>
                    </div>
                  </div>
                </div>
                <div className='main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block  font-heading'>
                  <nav>
                    <ul>
                      <li className='hot-deals'>
                        <img
                          src={hotIcon}
                          alt='hot deals'
                        />
                        <Link to='/products'>Hot Deals</Link>
                      </li>
                      <li>
                        <Link className='active' to='/'>
                          Accueil
                          <i className='fi-rs-angle-down'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to='/page-about'>A propos</Link>
                      </li>
                      <li>
                        <Link to='/shop-grid-right'>
                          Shop
                          <i className='fi-rs-angle-down'></i>
                        </Link>
                      </li>

                      <li>
                        <a href='#'>
                          Fournisseurs <i className='fi-rs-angle-down'></i>
                        </a>
                      </li>

                      <li className='position-static'>
                        <Link to='/#'>
                          Menu Mega
                          <i className='fi-rs-angle-down'></i>
                        </Link>
                      </li>
                      <li>
                        <Link to='/page-contact'>Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className='header-action-icon-2 d-block d-lg-none'>
                <div
                  className='burger-icon burger-icon-white'
                  onClick={toggleClick}
                >
                  <span className='burger-icon-top'></span>
                  <span className='burger-icon-mid'></span>
                  <span className='burger-icon-bottom'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   totalCartItems: state.cart.length,
//   totalCompareItems: state.compare.items.length,
//   totalWishlistItems: state.wishlist.items.length,
// });

// export default connect(mapStateToProps, null)(Header);

export default Header;
