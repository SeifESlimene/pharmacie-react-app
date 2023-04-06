import React from "react";
import { Modal } from 'react-responsive-modal';
import {closeQuickView, selecQuickViewProducts} from '../../features/quickView/quickViewSlice';

import ProductDetails from "./ProductDetails";

const images = [
    { src: "/images/offer/offer-1.jpg" },
    { src: "/images/offer/offer-2.jpg" },
    { src: "/images/offer/offer-3.jpg" },
];

const QuickView = () => {
    const settings = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={images[i].src} width="75" alt="" />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <Modal open={selecQuickViewProducts ? true : false} onClose={closeQuickView}>
                {selecQuickViewProducts && (
                    <div className="quick-view">
                        <ProductDetails product={selecQuickViewProducts} quickView={selecQuickViewProducts} />
                    </div>
                )}
            </Modal>
        </>
    );
};

/*const mapStateToProps = (state) => ({
    quickView: state.quickView,
});

export default connect(mapStateToProps, { closeQuickView })(QuickView);*/
export default QuickView;

