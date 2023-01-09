import React from "react";
import Button from "../Buttons/Button/Button";
import twoGrid from "../../assets/img/png/two.png";
import threeGrid from "../../assets/img/png/three.png";
import fourGrid from "../../assets/img/png/four.png";
import "./CatalogueSettings.scss";

interface SettingsProps {
  sortFunction: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  itemsFound: number;
  resetFiltersFn: () => void;
  setGrid: () => void;
}

const CatalogueSettings: React.FC<SettingsProps> = ({
  sortFunction,
  itemsFound,
  resetFiltersFn,
  setGrid,
}) => {
  return (
    <div className="settings">
      <button
        type="button"
        className="settings__reset"
        onClick={resetFiltersFn}
      >
        Reset Filters
      </button>
      <div className="settings__found">Found {itemsFound} item(s)</div>
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
        <Button onClick={setGrid} className="layout-mode__btn">
          <img src={twoGrid} alt="two grid" className="layout-mode__icon" />
        </Button>
        <Button onClick={setGrid} className="layout-mode__btn">
          <img
            src={threeGrid}
            alt="three grid"
            className="layout-mode__icon active-layout"
          />
        </Button>
        <Button onClick={setGrid} className="layout-mode__btn">
          <img src={fourGrid} alt="four grid" className="layout-mode__icon" />
        </Button>
      </div>
    </div>
  );
};

export default CatalogueSettings;
