import React from "react";
import data from "../../assets/data/data.json";
import CatalogueSettings from "../../components/CatalogueSettings/CatalogueSettings";
import CatalogueFilters from "../../components/CatalogueFilters/CatalogueFilters";
import CatalogueGoods from "../../components/CatalogueGoods/CatalogueGoods";
import "./CataloguePage.scss";

const CataloguePage: React.FC = () => {
  let goodsArr = data.goods;
  const sortItems = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "priceDown") {
      goodsArr = goodsArr.sort((a, b) => {
        return Number(b.price.slice(1)) - Number(a.price.slice(1));
      });
    } else if (event.target.value === "priceUp") {
      goodsArr = goodsArr.sort((a, b) => {
        return Number(a.price.slice(1)) - Number(b.price.slice(1));
      });
    } else if (event.target.value === "ratingDown") {
      goodsArr = goodsArr.sort((a, b) => {
        return b.rating - a.rating;
      });
    } else if (event.target.value === "ratingUp") {
      goodsArr = goodsArr.sort((a, b) => {
        return a.rating - b.rating;
      });
    }
  };
  return (
    <div className="catalogue">
      <div className="container">
        <CatalogueSettings sortFunction={sortItems} />
        <div className="filters-goods-wrapper">
          <CatalogueFilters />
          <CatalogueGoods />
          <div className="not-found">
            <p>No products found</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CataloguePage;
