import React from "react";
import cn from "classnames";
import RaitingStars from "../../components/RatingStars/RatingStars";
import Button from "../../components/Buttons/Button/Button";
import { WineInfo } from "../../utils/helpers/interfaces";
import searchIcon from "../../assets/img/svg/search-icon.svg";
import heartIcon from "../../assets/img/svg/heart-icon.svg";
import cartIcon from "../../assets/img/svg/cart-icon.svg";
import "./ProductCard.scss";

interface ProductCardProps extends WineInfo {
  classNames?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  images,
  price,
  rating,
  classNames,
}) => {
  const classes = cn("product-card", classNames);
  return (
    <div className={classes}>
      <img
        className="product-card__image"
        src={images ? images[1] : ""}
        alt="product"
      />
      <div className="product-card__content">
        <RaitingStars
          className="product-card__raiting"
          stars={rating === undefined ? 0 : rating}
        />
        <h3 className="product-card__title">{title}</h3>
      </div>
      <Button className="product-card__price">{price}</Button>
      <div className="product-card__actions">
        <Button className="product-card__action-btn">
          <img src={cartIcon} alt="cart" className="cart" />
        </Button>
        <Button className="product-card__action-btn">
          <img src={heartIcon} alt="favorities" className="favorities" />
        </Button>
        <Button className="product-card__action-btn">
          <img src={searchIcon} alt="modal" className="modal" />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
