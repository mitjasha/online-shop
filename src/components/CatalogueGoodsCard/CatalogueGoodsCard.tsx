import React from "react";
import cn from "classnames";
import Button from "../Buttons/Button/Button";
import heartIcon from "../../assets/img/svg/heart-icon.svg";
import cartIcon from "../../assets/img/svg/cart-icon.svg";
import searchIcon from "../../assets/img/svg/search-icon.svg";
import { WineInfo } from "../../utils/helpers/interfaces";
import "./CatalogueGoodsCard.scss";

interface CatalogueGoodsCardProps {
  data: WineInfo;
  classname?: string;
}

const CatalogueGoodsCard: React.FC<CatalogueGoodsCardProps> = ({
  data,
  classname,
}) => {
  const classes = cn("goods-card", classname);
  return (
    <div className={classes}>
      <img
        src={data.images?.[0]}
        alt={data.title}
        className="goods-card__image"
      />
      <h3 className="goods-card__title">{data.title}</h3>
      <p className="goods-card__rating">Rating: ★{data.rating}</p>
      <p className="goods-card__price">{data.price}</p>
      <div className="goods-card__actions">
        <Button className="goods-card__action-btn">
          <img src={cartIcon} alt="cart" className="cart" />
        </Button>
        <Button className="goods-card__action-btn">
          <img src={heartIcon} alt="favorities" className="favorities" />
        </Button>
        <Button className="goods-card__action-btn">
          <img src={searchIcon} alt="modal" className="modal" />
        </Button>
      </div>
    </div>
  );
};

export default CatalogueGoodsCard;
