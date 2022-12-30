import React from "react";
import "./CheckboxInput.scss";

interface CheckboxProps {
  legend: string;
  arr: string[];
  id: string;
}

const CheckboxInput: React.FC<CheckboxProps> = ({ legend, arr, id }) => {
  return (
    <fieldset className="filters__checkbox">
      <legend>{legend}</legend>
      {arr.map((elem: string) => (
        <div className="option">
          <label htmlFor={id}>
            <input type="checkbox" id={id} name={id} />
            {elem}
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default CheckboxInput;
