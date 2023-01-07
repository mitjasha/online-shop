import React from "react";
import CatalogueGoodsCard from "../../components/CatalogueGoodsCard/CatalogueGoodsCard";
import { CardsState, WineInfo } from "../../utils/helpers/interfaces";
import "./CatalogueGoods.scss";

interface CatalogueGoodsProps {
  data: WineInfo[];
  state: CardsState;
}

const CatalogueGoods: React.FC<CatalogueGoodsProps> = ({ data, state }) => {
  return (
    <div className="goods">
      {data.map((elem, index) => (
        <CatalogueGoodsCard
          classname="goods__item"
          data={elem}
          id={index}
          key={elem.title + index.toString()}
          state={state}
        />
      ))}
    </div>
  );
};

export default CatalogueGoods;
