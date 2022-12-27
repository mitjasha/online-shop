import React from "react";
import cn from "classnames";
import "./QuantityInput.scss";

interface QuantityInputProps {
  className?: string;
  cartValue: number;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  className,
  cartValue,
}) => {
  const classes = cn("quantity", className);

  const increaseQuantity = () => {
    const value: HTMLInputElement | null =
      document.querySelector(".quantity__input");
    if (value) {
      value.stepUp();
    }
  };

  const decreaseQuantity = () => {
    const value: HTMLInputElement | null =
      document.querySelector(".quantity__input");
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
        className="quantity__input"
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
