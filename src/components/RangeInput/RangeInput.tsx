import React from "react";
import cn from "classnames";
import "./RangeInput.scss";

interface RangeProps {
  title: string;
  id: string;
  min: number;
  max: number;
  className?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RangeInput: React.FC<RangeProps> = ({
  title,
  id,
  min,
  max,
  className,
  handleChange,
}) => {
  const classes = cn("input-range", className);

  return (
    <div className="filters__radio">
      <p>{title}</p>
      <label htmlFor={id}>
        <input
          type="range"
          id={id}
          min={min}
          max={max}
          className={classes}
          onChange={(data) => {
            handleChange(data);
          }}
        />
      </label>
      <div className="values">
        <span className="values__min">MIN: {min}</span>
        <span className="values__max">MAX: {max}</span>
      </div>
    </div>
  );
};

export default RangeInput;
