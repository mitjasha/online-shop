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
  rangeFilterPrice: (
    { min, max }: { min: number; max: number },
    type: string,
  ) => void;
  rangeFilterQuant: (
    { min, max }: { min: number; max: number },
    type: string,
  ) => void;
}

const CatalogueFilters: React.FC<FilterProps> = ({
  filterFunction,
  rangeFilterPrice,
  rangeFilterQuant,
}) => {
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
        min={5.99}
        max={56}
        className="price-range"
        onChange={({ min, max }, type = "price") => {
          rangeFilterPrice({ min, max }, type);
        }}
      />
      <RangeInput
        title="QUANTITY"
        id="quantity"
        min={4}
        max={22}
        onChange={({ min, max }, type = "quantity") => {
          rangeFilterQuant({ min, max }, type);
        }}
      />
      <Button className="filters__copy-link">Copy Link</Button>
    </div>
  );
};

export default CatalogueFilters;
