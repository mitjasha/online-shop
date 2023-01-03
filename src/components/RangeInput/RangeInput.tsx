import React from "react";
import cn from "classnames";
import "./RangeInput.scss";

interface RangeProps {
  title: string;
  id: string;
  minVal: string;
  maxVal: string;
  className?: string;
}

const RangeInput: React.FC<RangeProps> = ({
  title,
  id,
  minVal,
  maxVal,
  className,
}) => {
  const classes = cn("input-range", className);
  return (
    <div className="filters__radio">
      <p>{title}</p>
      <label htmlFor={id}>
        <input
          type="range"
          id={id}
          min={minVal}
          max={maxVal}
          className={classes}
        />
      </label>
      <div className="values">
        <span className="values__min">MIN: {minVal}</span>
        <span className="values__max">MAX: {maxVal}</span>
      </div>
    </div>
  );
};

export default RangeInput;
