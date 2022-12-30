import React from "react";
import cn from "classnames";
import "./CheckboxInput.scss";

interface CheckboxProps {
  legend: string;
  arr: string[];
  className?: string;
}

const CheckboxInput: React.FC<CheckboxProps> = ({ legend, arr, className }) => {
  const classes = cn("checkbox-input-wrapper", className);
  return (
    <fieldset className={classes}>
      <legend>{legend}</legend>
      {arr.map((elem: string, index) => (
        <div className="option">
          <label
            className="checkbox-label"
            htmlFor={index.toString().concat(elem)}
          >
            <input
              key={elem}
              type="checkbox"
              id={index.toString().concat(elem)}
              name={index.toString().concat(elem)}
              className="checkbox-input"
            />
            <span>{elem}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default CheckboxInput;