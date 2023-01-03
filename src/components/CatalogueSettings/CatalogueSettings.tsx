import React from "react";
import Button from "../Buttons/Button/Button";
import twoGrid from "../../assets/img/png/two.png";
import threeGrid from "../../assets/img/png/three.png";
import fourGrid from "../../assets/img/png/four.png";
import "./CatalogueSettings.scss";

const CatalogueSettings: React.FC = () => {
  return (
    <div className="settings">
      <Button className="settings__reset">Reset Filters</Button>
      <div className="settings__found">Found 0 items</div>
      <select id="sorting" className="settings__sort">
        <option>Sort options</option>
        <option>Sort by price ↓</option>
        <option>Sort by price ↑</option>
        <option>Sort by rating ↓</option>
        <option>Sort by rating ↑</option>
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
