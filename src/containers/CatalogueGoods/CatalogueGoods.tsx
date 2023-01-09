import React from "react";
import CatalogueGoodsCard from "../../components/CatalogueGoodsCard/CatalogueGoodsCard";
import { CardsState, WineInfo } from "../../utils/helpers/interfaces";
import "./CatalogueGoods.scss";

interface CatalogueGoodsProps {
  data: WineInfo[];
  initData: WineInfo[];
  state: CardsState;
  style?: React.CSSProperties;
}

const CatalogueGoods: React.FC<CatalogueGoodsProps> = ({
  data,
  state,
  style,
  initData,
}) => {
  return (
    <div className="goods" style={style}>
      {data.map((elem, index) => (
        <CatalogueGoodsCard
          classname="goods__item"
          data={elem}
          id={initData.findIndex((object) => {
            return object === elem;
          })}
          key={elem.title + index.toString()}
          state={state}
        />
      ))}
    </div>
  );
};

export default CatalogueGoods;
