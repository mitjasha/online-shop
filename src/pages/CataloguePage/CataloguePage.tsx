import React from "react";
import "./CataloguePage.scss";

const CataloguePage: React.FC = () => {
  return (
    <div className="catalogue">
      <div className="container">
        <div className="settings">1</div>
        <div className="filters-goods-wrapper">
          <div className="filters">
            <input type="checkbox" className="filters__type" />
          </div>
          <div className="goods">1</div>
        </div>
      </div>
    </div>
  );
};
export default CataloguePage;
