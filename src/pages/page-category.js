import { useState } from 'react';
import Cat1Tab from '../components/elements/FeaturedTab';
import Layout from '../components/layout/Layout';
import { useGetProductsQuery } from '../api/productApi';
import { useParams } from 'react-router-dom';
import {
  useGetCategorysQuery,
  useGetSubCategorysQuery,
} from '../api/categoryApi';
const Category = () => {
  const [active] = useState('1');
  let { subcategoryId } = useParams();

  const { data: products = [], isLoading, isError } = useGetProductsQuery();
  const { data: categorys = [] } = useGetCategorysQuery();
  const { data: Subcategorys = [] } = useGetSubCategorysQuery();

  const subcategoryName = Subcategorys.filter((subCategory) => {
    return subCategory.id === parseInt(subcategoryId);
  }).map(sub => sub.name)[0]

  const subcategoryParent = Subcategorys.filter((subCategory) => {
    return subCategory.id === parseInt(subcategoryId);
  }).map(sub => sub.categoryId)[0]

  const categoryName = categorys.filter((category) => category.id === subcategoryParent).map(cat => cat.name)[0]

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading...</div>;

  const filteredProducts = products.filter(product => product.subCategoryId === subcategoryId)
  
  return (
    <Layout parent='Home' sub={categoryName} subChild={subcategoryName}>
      <section className='product-tabs section-padding position-relative'>
        <div className='container'>
          <div className='col-lg-12'>
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
                  <Cat1Tab products={filteredProducts} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Category;
