import React, { useState, useRef, useEffect } from "react";
import cn from "classnames";
import "./RangeInput.scss";

interface RangeProps {
  title: string;
  id: string;
  min: number;
  max: number;
  className?: string;
  onChange: ({ min, max }: { min: number; max: number }) => void;
}

const RangeInput: React.FC<RangeProps> = ({
  title,
  id,
  min,
  max,
  className,
  onChange,
}) => {
  const classes = cn("input-range", className);
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal]);

  // minVal, maxVal, onChange

  return (
    <div className="filters__radio">
      <p>{title}</p>
      <label className="range-label" htmlFor={id}>
        <input
          type="range"
          name="a"
          id={id}
          className={classes}
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
        />
        <input
          type="range"
          name="b"
          id={id}
          min={min}
          max={max}
          value={maxVal}
          className={classes}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
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
