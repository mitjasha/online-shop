import React, { useState } from "react";
import data from "../../assets/data/data.json";
import CatalogueSettings from "../../components/CatalogueSettings/CatalogueSettings";
import CatalogueFilters from "../../components/CatalogueFilters/CatalogueFilters";
import CatalogueGoods from "../../containers/CatalogueGoods/CatalogueGoods";
import "./CataloguePage.scss";

const CataloguePage: React.FC = () => {
  const [sortData, setSortData] = useState(data.goods);
  let goodsArr = [...data.goods];
  const sortItems = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "priceDown") {
      goodsArr = goodsArr.sort((a, b) => {
        return Number(b.price.slice(1)) - Number(a.price.slice(1));
      });
      setSortData(goodsArr);
    } else if (event.target.value === "priceUp") {
      goodsArr = goodsArr.sort((a, b) => {
        return Number(a.price.slice(1)) - Number(b.price.slice(1));
      });
      setSortData(goodsArr);
    } else if (event.target.value === "ratingDown") {
      goodsArr = goodsArr.sort((a, b) => {
        return b.rating - a.rating;
      });
      setSortData(goodsArr);
    } else if (event.target.value === "ratingUp") {
      goodsArr = goodsArr.sort((a, b) => {
        return a.rating - b.rating;
      });
      setSortData(goodsArr);
    }
  };
  return (
    <div className="catalogue">
      <div className="container">
        <CatalogueSettings sortFunction={sortItems} />
        <div className="filters-goods-wrapper">
          <CatalogueFilters />
          <CatalogueGoods data={sortData} />
          <div className="not-found">
            <p>No products found</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CataloguePage;
