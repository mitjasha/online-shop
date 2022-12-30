import React from "react";
import "./RangeInput.scss";

interface RangeProps {
  title: string;
  id: string;
  minVal: string;
  maxVal: string;
}

const RangeInput: React.FC<RangeProps> = ({ title, id, minVal, maxVal }) => {
  return (
    <div className="filters__radio">
      <p>{title}</p>
      <label htmlFor={id}>
        <input type="range" id={id} name={id} min={minVal} max={maxVal} />
      </label>
    </div>
  );
};

export default RangeInput;
