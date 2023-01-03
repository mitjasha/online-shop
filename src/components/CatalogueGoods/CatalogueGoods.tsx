import React from "react";
import Button from "../Buttons/Button/Button";
import heartIcon from "../../assets/img/svg/heart-icon.svg";
import cartIcon from "../../assets/img/svg/cart-icon.svg";
import searchIcon from "../../assets/img/svg/search-icon.svg";
import "./CatalogueGoods.scss";

export interface GoodsProps {
  goodsArr: {
    title: string;
    type: string;
    country: string;
    region: string;
    grapes: string;
    rating: number;
    images: string[];
    price: string;
    quantity: number;
    year: number;
    description: string;
  }[];
}

const CatalogueGoods: React.FC<GoodsProps> = ({ goodsArr }) => {
  return (
    <div className="goods">
      {goodsArr.map((elem, index) => (
        <div className="goods__item" key={elem.title + index.toString()}>
          <img
            src={elem.images ? elem.images[0] : ""}
            alt={elem.title}
            className="goods__image"
          />
          <h3 className="goods__title">{elem.title}</h3>
          <p className="goods__rating">Rating: ★{elem.rating}</p>
          <p className="goods__price">{elem.price}</p>
          <div className="goods__actions">
            <Button className="action-btn">
              <img src={cartIcon} alt="cart" className="cart" />
            </Button>
            <Button className="action-btn">
              <img src={heartIcon} alt="favorities" className="favorities" />
            </Button>
            <Button className="action-btn">
              <img src={searchIcon} alt="modal" className="modal" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatalogueGoods;
