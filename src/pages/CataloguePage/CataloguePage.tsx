import React from "react";
import CatalogueSettings from "../../components/CatalogueSettings/CatalogueSettings";
import CatalogueFilters from "../../components/CatalogueFilters/CatalogueFilters";
import CatalogueGoods from "../../containers/CatalogueGoods/CatalogueGoods";
import data from "../../assets/data/data.json";
import "./CataloguePage.scss";

const CataloguePage: React.FC = () => {
  return (
    <div className="catalogue">
      <div className="container">
        <CatalogueSettings />
        <div className="filters-goods-wrapper">
          <CatalogueFilters />
          <CatalogueGoods data={data.goods} />
          <div className="not-found">
            <p>No products found</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CataloguePage;
