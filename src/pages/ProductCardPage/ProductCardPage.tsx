import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductImageSlider from "../../components/ProductImageSlider/ProductImageSlider";
import data from "../../assets/data/data.json";
import RaitingStars from "../../components/RatingStars/RatingStars";
import QuantityInput from "../../components/QuantityInput/QuantityInput";
import Button from "../../components/Buttons/Button/Button";
import heartIcon from "../../assets/img/svg/heart-icon.svg";
import "./ProductCardPage.scss";
import CartButton from "../../components/Buttons/CartButton/CartButton";
import { AppContextType, useAppContext } from "../../context";
import BuyNowButton from "../../components/Buttons/BuyNowButton/BuyNowButton";

const ProductCardPage: React.FC = () => {
  const appContext = useAppContext();
  const { id } = useParams();
  if ((!Number(id) && Number(id) !== 0) || Number(id) >= data.goods.length) {
    return <Navigate to="/404" />;
  }

  let cartIndex = [] as string[];
  if ((appContext as AppContextType).currentCartState?.[0]) {
    cartIndex = Object.entries(
      (appContext as AppContextType).currentCartState?.[0],
    ).map((entry) => entry[0]);
  }

  return (
    <main className="product-page">
      <div className="container product-page__container">
        <ProductImageSlider
          className="product__images-slider"
          imagesData={data.goods[Number(id)].images}
        />
        <div className="product-info">
          <Breadcrumbs
            className="product-info__breadcrumbs"
            data={data.goods[Number(id)]}
          />
          <h2 className="product-info__title">
            {data.goods[Number(id)].title}
          </h2>
          <RaitingStars
            className="product-info__raiting"
            stars={data.goods[Number(id)].rating}
          />
          <div className="product-info__line"> </div>
          <div className="product-info__price">
            {data.goods[Number(id)].price}
          </div>
          <div className="product-info__description">
            {data.goods[Number(id)].description}
          </div>
          <div className="product-info__actions">
            <QuantityInput
              className="product-info__quantity"
              cartValue={1}
              classKey="product-card"
              id={Number(id)}
            />
            <CartButton
              className="product-info__add-button"
              action
              id={Number(id)}
            >
              {cartIndex.includes(id as string)
                ? " Product in cart"
                : "Add to cart"}
            </CartButton>
            <Button className="product-info__favourites">
              <img
                src={heartIcon}
                alt="favorities"
                className="product-info__favourites-icon"
              />
            </Button>
          </div>
          <BuyNowButton className="product-info__buy-now">BUY NOW</BuyNowButton>
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
