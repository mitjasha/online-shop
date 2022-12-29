import React from "react";
import data from "../../assets/data/data.json";
import Button from "../../components/Buttons/Button/Button";
import "./CataloguePage.scss";

const wineTypes = ["Red wine", "White wine", "Sparkling wine", "Rosé wine"];

const CataloguePage: React.FC = () => {
  return (
    <div className="catalogue">
      <div className="container">
        <div className="settings">
          <Button className="settings__reset">Reset Filters</Button>
          <div className="settings__found">Found 0 items</div>
          <label htmlFor="sorting">
            <select id="sorting">
              <option value="">Sort options</option>
              <option value="">Sort by price</option>
              <option value="">Sort by rating</option>
              <option value="">Sort by quantity</option>
              <option value="">Sort by year</option>
            </select>
          </label>
        </div>
        <div className="filters-goods-wrapper">
          <div className="filters">
            <fieldset className="filters__checkbox">
              <legend>TYPE OF WINE</legend>
              {wineTypes.map((elem) => (
                <div className="option">
                  <label htmlFor="type">
                    <input type="checkbox" id="type" name="type" />
                    {elem}
                  </label>
                </div>
              ))}
            </fieldset>
            <fieldset className="filters__checkbox filters__checkbox_brand">
              <legend>BRAND</legend>
              {data.goods.map((elem) => (
                <div className="option">
                  <label htmlFor="brand">
                    <input type="checkbox" id="brand" name="brand" />
                    {elem.title}
                  </label>
                </div>
              ))}
            </fieldset>
            <div className="filters__radio">
              <p>Price</p>
              <label htmlFor="price">
                <input
                  type="range"
                  id="price"
                  name="price"
                  min="5.99"
                  max="56"
                />
              </label>
            </div>
            <div className="filters__radio">
              <p>Quantity</p>
              <label htmlFor="quantity">
                <input
                  type="range"
                  id="quantity"
                  name="quantity"
                  min="4"
                  max="22"
                />
              </label>
            </div>
          </div>
          <div className="goods">1</div>
        </div>
      </div>
    </div>
  );
};
export default CataloguePage;
