import React from 'react';
import { Modal } from 'react-responsive-modal';
import {
  closeQuickView,
  selectQuickViewProducts,
} from '../../features/quickView/quickViewSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductDetails from './ProductDetails';

const QuickView = () => {
  const dispatch = useDispatch();
  const quickViewProducts = useSelector(selectQuickViewProducts);
  return (
    <>
      <Modal
        open={quickViewProducts ? true : false}
        onClose={() => dispatch(closeQuickView())}
      >
        {quickViewProducts && (
          <div className='quick-view'>
            <ProductDetails
              product={quickViewProducts}
              quickView={quickViewProducts}
            />
          </div>
        )}
      </Modal>
    </>
  );
};

export default QuickView;
