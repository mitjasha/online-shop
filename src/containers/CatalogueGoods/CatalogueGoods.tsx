import React from "react";
import CatalogueGoodsCard from "../../components/CatalogueGoodsCard/CatalogueGoodsCard";
import { WineInfo } from "../../utils/helpers/interfaces";
import "./CatalogueGoods.scss";

interface CatalogueGoodsProps {
  data: WineInfo[];
}

const CatalogueGoods: React.FC<CatalogueGoodsProps> = ({ data }) => {
  return (
    <div className="goods">
      {data.map((elem, index) => (
        <CatalogueGoodsCard
          classname="goods__item"
          data={elem}
          key={elem.title + index.toString()}
        />
      ))}
    </div>
  );
};

export default CatalogueGoods;
