import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductImageSlider from "../../components/ProductImageSlider/ProductImageSlider";
import "./ProductCardPage.scss";
import data from "../../assets/data/data.json";
import RaitingStars from "../../components/RaitingStars/RaitingStars";
import QuantityInput from "../../components/QuantityInput/QuantityInput";
import Button from "../../components/Buttons/Button/Button";
import heartIcon from "../../assets/img/svg/heart-icon.svg";

const ProductCardPage: React.FC = () => {
  return (
    <main className="product-page">
      <div className="container product-page__container">
        <ProductImageSlider className="product__images-slider" />
        <div className="product-info">
          <Breadcrumbs
            className="product-info__breadcrumbs"
            data={data.goods[1]}
          />
          <h2 className="product-info__title">{data.goods[1].title}</h2>
          <RaitingStars
            className="product-info__raiting"
            stars={data.goods[1].rating}
          />
          <div className="product-info__line"> </div>
          <div className="product-info__price">{data.goods[1].price}</div>
          <div className="product-info__description">
            {data.goods[1].description}
          </div>
          <div className="product-info__actions">
            <QuantityInput cartValue={1} />
            <Button className="product-info__add-button">Add to cart</Button>
            <Button className="product-info__favourites">
              <img
                src={heartIcon}
                alt="favorities"
                className="product-info__favourites-icon"
              />
            </Button>
          </div>
          <Button className="product-info__buy-now">BUY NOW</Button>
        </div>
      </div>
      <div className="container related-products__container">
        <h2 className="related-products__title">Related Products</h2>
        <div className="related-products__cards"> </div>
      </div>
    </main>
  );
};
export default ProductCardPage;
