import React from "react";
import data from "../../assets/data/data.json";
import Button from "../../components/Buttons/Button/Button";
import RangeInput from "../../components/RangeInput/RangeInput";
import CheckboxInput from "../../components/CheckboxInput/CheckboxInput";
import { WineType, Titles } from "../../utils/helpers/interfaces";
import twoGrid from "../../assets/img/png/two.png";
import threeGrid from "../../assets/img/png/three.png";
import fourGrid from "../../assets/img/png/four.png";
import heartIcon from "../../assets/img/svg/heart-icon.svg";
import cartIcon from "../../assets/img/svg/cart-icon.svg";
import searchIcon from "../../assets/img/svg/search-icon.svg";
import "./CataloguePage.scss";

const types = Object.values(WineType);
const titles = Object.values(Titles);

const CataloguePage: React.FC = () => {
  return (
    <div className="catalogue">
      <div className="container">
        <div className="settings">
          <Button className="settings__reset">Reset Filters</Button>
          <div className="settings__found">Found 0 items</div>
          <select id="sorting" className="settings__sort">
            <option>Sort options</option>
            <option>Sort by price</option>
            <option>Sort by rating</option>
            <option>Sort by quantity</option>
            <option>Sort by year</option>
          </select>
          <div className="layout-mode">
            <img src={twoGrid} alt="two grid" className="layout-mode__two" />
            <img
              src={threeGrid}
              alt="three grid"
              className="layout-mode__three"
            />
            <img src={fourGrid} alt="four grid" className="layout-mode__four" />
          </div>
        </div>
        <div className="filters-goods-wrapper">
          <div className="filters">
            <CheckboxInput legend="TYPE OF WINE" arr={types} />
            <CheckboxInput
              legend="BRAND"
              arr={titles}
              className="filters__checkbox_brand"
            />
            <RangeInput
              title="Price"
              id="price"
              minVal="5.99"
              maxVal="56"
              className="price-range"
            />
            <RangeInput title="Quantity" id="quantity" minVal="4" maxVal="22" />
          </div>
          <div className="goods">
            {data.goods.map((elem) => (
              <div className="goods__item">
                <img
                  src={elem.images[0]}
                  alt={elem.title}
                  className="goods__image"
                />
                <h3>{elem.title}</h3>
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
        </div>
      </div>
    </div>
  );
};
export default CataloguePage;
