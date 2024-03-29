import React from "react";
import cn from "classnames";
import "./CheckboxInput.scss";

interface CheckboxProps {
  legend: string;
  optionsArray: string[];
  className?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxInput: React.FC<CheckboxProps> = ({
  legend,
  optionsArray,
  className,
  handleChange,
}) => {
  const classes = cn("checkbox-input-wrapper", className);
  return (
    <fieldset className={classes}>
      <legend>{legend}</legend>
      {optionsArray.map((elem: string) => (
        <div className="option" key={elem}>
          <label className="checkbox-label" htmlFor={elem}>
            <input
              key={elem}
              type="checkbox"
              id={elem}
              className="checkbox-input"
              onChange={(data) => {
                handleChange(data);
              }}
            />
            <span>{elem}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default CheckboxInput;
