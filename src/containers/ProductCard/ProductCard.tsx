import React from "react";
import cn from "classnames";
import RaitingStars from "../../components/RatingStars/RatingStars";
import Button from "../../components/Buttons/Button/Button";
import ProductCardActions from "../../components/ProductCardActions/ProductCardActions";
import { WineInfo } from "../../utils/helpers/interfaces";
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
      <RaitingStars
        className="product-card__raiting"
        stars={rating === undefined ? 0 : rating}
      />
      <h3 className="product-card__title">{title}</h3>
      <Button className="product-card__price">{price}</Button>
      <ProductCardActions className="product-card__actions" />
    </div>
  );
};

export default ProductCard;
