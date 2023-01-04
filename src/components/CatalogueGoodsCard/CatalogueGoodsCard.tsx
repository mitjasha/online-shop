import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button/Button";
import ProductInfoButton from "../Buttons/ProductInfoButton/ProductInfoButton";
import heartIcon from "../../assets/img/svg/heart-icon.svg";
import cartIcon from "../../assets/img/svg/cart-icon.svg";
import searchIcon from "../../assets/img/svg/search-icon.svg";
import { CardsState, WineInfo } from "../../utils/helpers/interfaces";
import "./CatalogueGoodsCard.scss";
import CartButton from "../Buttons/CartButton/CartButton";

interface CatalogueGoodsCardProps {
  data: WineInfo;
  classname?: string;
  id: string;
  state: CardsState;
}

const CatalogueGoodsCard: React.FC<CatalogueGoodsCardProps> = ({
  data,
  classname,
  id,
  state,
}) => {
  const classes = cn("goods-card", classname);
  return (
    <div className={classes}>
      <Link className="goods-card__link-container" to={`/product/${id}`}>
        <img
          src={data.images?.[0]}
          alt={data.title}
          className="goods-card__image"
        />
        <h3 className="goods-card__title">{data.title}</h3>
        <p className="goods-card__rating">Rating: ★{data.rating}</p>
        <p className="goods-card__price">{data.price}</p>
      </Link>
      <div className="goods-card__actions">
        <CartButton className="goods-card__action-btn" id={id} state={state}>
          <img src={cartIcon} alt="cart" className="cart" />
        </CartButton>
        <Button className="goods-card__action-btn">
          <img src={heartIcon} alt="favorities" className="favorities" />
        </Button>
        <ProductInfoButton className="goods-card__action-btn" id={Number(id)}>
          <img src={searchIcon} alt="modal" className="is-modal" />
        </ProductInfoButton>
      </div>
    </div>
  );
};

export default CatalogueGoodsCard;
