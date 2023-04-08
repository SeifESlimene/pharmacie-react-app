import React from 'react';
import Layout from './components/layout/Layout';
import CategoryTab from './components/ecommerce/categoryTab';
import QuickView from './components/ecommerce/QuickView';

export default function App() {
  return (
    <>
      <Layout noBreadcrumb='d-none'>
        <section className='product-tabs section-padding position-relative'>
          <div className='container'>
            <div className='col-lg-12'>
              <CategoryTab />
            </div>
          </div>
        </section>
        <QuickView />
      </Layout>
    </>
  );
}
