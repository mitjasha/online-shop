import React from "react";
import cn from "classnames";
import "./CheckboxInput.scss";

interface CheckboxProps {
  legend: string;
  arr: string[];
  id: string;
  className?: string;
}

const CheckboxInput: React.FC<CheckboxProps> = ({
  legend,
  arr,
  id,
  className,
}) => {
  const classes = cn("checkbox-input-wrapper", className);
  return (
    <fieldset className={classes}>
      <legend>{legend}</legend>
      {arr.map((elem: string) => (
        <div className="option">
          <label htmlFor={id}>
            <input
              type="checkbox"
              id={id}
              name={id}
              className="checkbox-input"
            />
            {elem}
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default CheckboxInput;
