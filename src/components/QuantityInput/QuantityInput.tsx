import React from "react";
import "./QuantityInput.scss";

const QuantityInput: React.FC = () => {
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
    <div className="quantity">
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
        defaultValue={1}
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
