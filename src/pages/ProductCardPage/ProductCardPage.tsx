import React from "react";
import ProductImageSlider from "../../components/ProductImageSlider/ProductImageSlider";
import "./ProductCardPage.scss";

const ProductCardPage: React.FC = () => {
  return (
    <main className="product-page">
      <div className="container product-page__container">
        <ProductImageSlider className="product-page__slider" />
      </div>
    </main>
  );
};
export default ProductCardPage;
