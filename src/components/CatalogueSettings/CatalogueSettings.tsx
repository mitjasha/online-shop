import React from "react";
import Button from "../Buttons/Button/Button";
import twoGrid from "../../assets/img/png/two.png";
import threeGrid from "../../assets/img/png/three.png";
import fourGrid from "../../assets/img/png/four.png";
import "./CatalogueSettings.scss";

interface SettingsProps {
  sortFunction: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  itemsFound: number;
}

const CatalogueSettings: React.FC<SettingsProps> = ({
  sortFunction,
  itemsFound,
}) => {
  return (
    <div className="settings">
      <Button className="settings__reset">Reset Filters</Button>
      <div className="settings__found">Found {itemsFound} items</div>
      <select
        id="sorting"
        className="settings__sort"
        onChange={(data) => {
          sortFunction(data);
        }}
      >
        <option value="default">Sort options</option>
        <option value="priceDown">Sort by price ↓</option>
        <option value="priceUp">Sort by price ↑</option>
        <option value="ratingDown">Sort by rating ↓</option>
        <option value="ratingUp">Sort by rating ↑</option>
      </select>
      <div className="layout-mode">
        <img src={twoGrid} alt="two grid" className="layout-mode__two" />
        <img
          src={threeGrid}
          alt="three grid"
          className="layout-mode__three active-layout"
        />
        <img src={fourGrid} alt="four grid" className="layout-mode__four" />
      </div>
    </div>
  );
};

export default CatalogueSettings;
