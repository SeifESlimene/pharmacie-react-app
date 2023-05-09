import React from 'react';
import { Link } from 'react-router-dom';
import paymentMethodIcon from '../../imgs/theme/payment-method.png';
import emailIcon from '../../imgs/theme/icons/icon-email-2.svg';
import logo from '../../imgs/theme/logo.svg';

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
                      {/* <img src={logo} alt='logo' /> */}
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
                &copy; 2023, <strong className='text-brand'>Pharmacie</strong> <br />
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
