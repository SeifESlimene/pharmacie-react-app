import React, { useState } from 'react';
// import { server } from "../../config";
import Cat1Tab from '../elements/FeaturedTab';
import { useGetProductsQuery } from '../../api/productApi';

// import Cat2Tab from '../elements/NewArrivalTab';
// import Cat3Tab from '../elements/TrendingTab';
// import productData from "../../product.json";

function CategoryTab() {
  const [active] = useState('1');
  //   const [catAll, setCatAll] = useState([]);
  // const [cat1, setCat1] = useState([]);
  // const [cat2, setCat2] = useState([]);
  // const [cat3, setCat3] = useState([]);
  const { data: products = [], isLoading, isError } = useGetProductsQuery();

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className='section-title style-2 wow animate__animated animate__fadeIn'>
        <h3>Popular Products</h3>
        <ul className='nav nav-tabs links' id='myTab' role='tablist'></ul>
      </div>

      <div className='tab-content wow fadeIn animated'>
        <div
          className={
            active === '1' ? 'tab-pane fade show active' : 'tab-pane fade'
          }
        >
          <div className='product-grid-4 row'>
            <Cat1Tab products={products} />
          </div>
        </div>
      </div>
    </>
  );
}
export default CategoryTab;
