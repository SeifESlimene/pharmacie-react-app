import React from 'react';
import { Link } from 'react-router-dom';
import pinterestIcon from '../../imgs/theme/icons/icon-pinterest-white.svg';
import instagramIcon from '../../imgs/theme/icons/icon-instagram-white.svg';
import twitterIcon from '../../imgs/theme/icons/icon-twitter-white.svg';
import youtubeIcon from '../../imgs/theme/icons/icon-youtube-white.svg';
import facebookIcon from '../../imgs/theme/icons/icon-facebook-white.svg';
import phoneCallIcon from '../../imgs/theme/icons/phone-call.svg';
import paymentMethodIcon from '../../imgs/theme/payment-method.png';
import googlePlayIcon from '../../imgs/theme/google-play.jpg';
import appStoreIcon from '../../imgs/theme/app-store.jpg';
import clockIcon from '../../imgs/theme/icons/icon-clock.svg';
import emailIcon from '../../imgs/theme/icons/icon-email-2.svg';
import contactIcon from '../../imgs/theme/icons/icon-contact.svg';
import locationIcon from '../../imgs/theme/icons/icon-location.svg';
import logo from '../../imgs/theme/logo.svg';
import icon6 from '../../imgs/theme/icons/icon-6.svg';
import icon5 from '../../imgs/theme/icons/icon-5.svg';
import icon4 from '../../imgs/theme/icons/icon-4.svg';
import icon3 from '../../imgs/theme/icons/icon-3.svg';
import icon2 from '../../imgs/theme/icons/icon-2.svg';
import icon1 from '../../imgs/theme/icons/icon-1.svg';

const Footer = () => {
  return (
    <>
      <footer className='main'>
        <section className='section-padding footer-mid'>
          <div className='container pt-15 pb-20'>
            <div className='row'>
              <div className='col'>
                <div
                  className='widget-about font-md mb-md-3 mb-lg-3 mb-xl-0  wow animate__animated animate__fadeInUp'
                  data-wow-delay='0'
                >
                  <div className='logo  mb-30'>
                    <Link to='/' className='mb-15'>
                      <img src={logo} alt='logo' />
                    </Link>
                    <p className='font-lg text-heading'>
                      Votre pharmacie en ligne
                    </p>
                  </div>
                  <ul className='contact-infor'>
                    <li>
                      <img src={emailIcon} alt='' />
                      <strong>Email: </strong>
                      <span>sale@pharmacie.tn</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className='footer-link-widget col  wow animate__animated animate__fadeInUp'
                data-wow-delay='.1s'
              >
                <h4 className='widget-title'>Société</h4>
                <ul className='footer-list  mb-sm-5 mb-md-0'>
                  <li>
                    <Link to='/page-about'>A propos</Link>
                  </li>
                  <li>
                    <a href='#'>Politique de confidentialité</a>
                  </li>
                  <li>
                    <a href='#'>Conditions &amp; Terms</a>
                  </li>
                  <li>
                    <a href='#'>Contacter Nous</a>
                  </li>
                </ul>
              </div>
              <div
                className='footer-link-widget col  wow animate__animated animate__fadeInUp'
                data-wow-delay='.2s'
              >
                <h4 className='widget-title '>Compte</h4>
                <ul className='footer-list  mb-sm-5 mb-md-0'>
                  <li>
                    <a href='#'>Se connecter</a>
                  </li>
                  <li>
                    <a href='#'>Afficher Panier</a>
                  </li>
                  <li>
                    <a href='#'>List d'envie</a>
                  </li>
                  <li>
                    <a href='#'>Comparer les produits</a>
                  </li>
                </ul>
              </div>
              <div
                className='footer-link-widget col  wow animate__animated animate__fadeInUp'
                data-wow-delay='.3s'
              >
                <h4 className='widget-title '>Corporation</h4>
                <ul className='footer-list  mb-sm-5 mb-md-0'>
                  <li>
                    <a href='#'>Devenir un fournisseur</a>
                  </li>
                  <li>
                    <a href='#'>Nos fournisseurs</a>
                  </li>
                </ul>
              </div>
              <div
                className='footer-link-widget widget-install-app col  wow animate__animated animate__fadeInUp'
                data-wow-delay='.5s'
              >
                <p className='mb-20 '>Secured Payment Gateways</p>
                <img className='' src={paymentMethodIcon} alt='' />
              </div>
            </div>
          </div>
        </section>
        <div
          className='container pb-30  wow animate__animated animate__fadeInUp'
          data-wow-delay='0'
        >
          <div className='row align-items-center'>
            <div className='col-12 mb-30'>
              <div className='footer-bottom'></div>
            </div>
            <div className='col-xl-12 col-lg-12 col-md-12'>
              <p className='font-sm mb-0 text-center'>
                &copy; 2023, <strong className='text-brand'>Pharmacie</strong> - Créer Par S.H Info <br />
                Tous les droits sont reservés
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
