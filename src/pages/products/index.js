import React, { useEffect, useState } from 'react';
import ProductDetails from '../../components/ecommerce/ProductDetails';
import Layout from '../../components/layout/Layout';
import { findProductIndex } from '../../util/util';
import { useParams } from 'react-router-dom';

const ProductId = () => {
  const [product, setProduct] = useState(null);
  let params = useParams();
  useEffect(() => {
    async function product() {
      const request = await fetch(`${process.env.PUBLIC_URL}/product.json`);
      const data = await request.json();
      const index = findProductIndex(data, params.slug);
      setProduct(data[index]);
    }
    product();
  });
  if (!product) {
    return null;
  } else {
    return (
      <>
        <Layout parent='Home' sub='Shop' subChild={product.title}>
          <div className='container'>
            <ProductDetails product={product} />
          </div>
        </Layout>
      </>
    );
  }
};

export default ProductId;
