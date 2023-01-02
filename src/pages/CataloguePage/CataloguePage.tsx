import React from "react";
import data from "../../assets/data/data.json";
import Button from "../../components/Buttons/Button/Button";
import CatalogueSettings from "../../components/CatalogueSettings/CatalogueSettings";
import heartIcon from "../../assets/img/svg/heart-icon.svg";
import cartIcon from "../../assets/img/svg/cart-icon.svg";
import searchIcon from "../../assets/img/svg/search-icon.svg";
import "./CataloguePage.scss";
import CatalogueFilters from "../../components/CatalogueFilters/CatalogueFilters";

const CataloguePage: React.FC = () => {
  return (
    <div className="catalogue">
      <div className="container">
        <CatalogueSettings />
        <div className="filters-goods-wrapper">
          <CatalogueFilters />
          <div className="goods">
            {data.goods.map((elem) => (
              <div className="goods__item">
                <img
                  src={elem.images[0]}
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
                    <img
                      src={heartIcon}
                      alt="favorities"
                      className="favorities"
                    />
                  </Button>
                  <Button className="action-btn">
                    <img src={searchIcon} alt="modal" className="modal" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="not-found">
            <p>No products found</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CataloguePage;
