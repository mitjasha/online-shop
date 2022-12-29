import React from "react";
// import data from "../../assets/data/data.json";
import "./CataloguePage.scss";

const wineTypes = ["Red wine", "White wine", "Sparkling wine", "Rosé wine"];

const CataloguePage: React.FC = () => {
  return (
    <div className="catalogue">
      <div className="container">
        <div className="settings">1</div>
        <div className="filters-goods-wrapper">
          <div className="filters">
            <fieldset>
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
          </div>
          <div className="goods">1</div>
        </div>
      </div>
    </div>
  );
};
export default CataloguePage;
