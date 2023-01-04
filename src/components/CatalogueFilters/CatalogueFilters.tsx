import React from "react";
import Button from "../Buttons/Button/Button";
import RangeInput from "../RangeInput/RangeInput";
import CheckboxInput from "../CheckboxInput/CheckboxInput";
import { WineType, Titles } from "../../utils/helpers/interfaces";
import "./CatalogueFilters.scss";

const types = Object.values(WineType);
const titles = Object.values(Titles);

interface FilterProps {
  filterFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CatalogueFilters: React.FC<FilterProps> = ({ filterFunction }) => {
  return (
    <div className="filters">
      <CheckboxInput
        legend="TYPE OF WINE"
        optionsArray={types}
        handleChange={filterFunction}
      />
      <CheckboxInput
        legend="BRAND"
        optionsArray={titles}
        className="filters__checkbox_brand"
        handleChange={filterFunction}
      />
      <RangeInput
        title="PRICE"
        id="price"
        minVal="$5.99"
        maxVal="$56"
        className="price-range"
      />
      <RangeInput title="QUANTITY" id="quantity" minVal="4" maxVal="22" />
      <Button className="filters__copy-link">Copy Link</Button>
    </div>
  );
};

export default CatalogueFilters;
