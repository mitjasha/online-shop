import React from "react";
import cn from "classnames";
import "./QuantityInput.scss";

interface QuantityInputProps {
  className?: string;
  cartValue: number;
  classKey: string;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  className,
  cartValue,
  classKey,
}) => {
  const classes = cn("quantity", className);
  const inputClasses = cn("quantity__input", `js_quantity${classKey}`);

  const increaseQuantity = () => {
    const value: HTMLInputElement | null = document.querySelector(
      `.js_quantity${classKey}`,
    );
    if (value) {
      value.stepUp();
    }
  };

  const decreaseQuantity = () => {
    const value: HTMLInputElement | null = document.querySelector(
      `.js_quantity${classKey}`,
    );
    if (value) {
      value.stepDown();
    }
  };

  return (
    <div className={classes}>
      <button
        type="button"
        onClick={decreaseQuantity}
        className="quantity__minus"
      >
        -
      </button>
      <input
        className={inputClasses}
        min="0"
        name="quantity"
        defaultValue={cartValue}
        type="number"
      />
      <button
        type="button"
        onClick={increaseQuantity}
        className="quantity__plus"
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;
