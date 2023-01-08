import React from "react";
import cn from "classnames";
import "./QuantityInput.scss";
import { AppContextType, useAppContext } from "../../context";

interface QuantityInputProps {
  className?: string;
  cartValue: number;
  classKey: string;
  id: number;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  className,
  cartValue,
  classKey,
  id,
}) => {
  const classes = cn("quantity", className);
  const inputClasses = cn("quantity__input", `js_quantity${classKey}`);
  const appContext = useAppContext();
  const state: { [key: string]: number } = Object.assign(
    {},
    ...(appContext as AppContextType).currentCartState,
  );

  const increaseQuantity = () => {
    const value: HTMLInputElement | null = document.querySelector(
      `.js_quantity${classKey}`,
    );
    if (value) {
      value.stepUp();
      if (appContext) {
        if (id.toString() in state) {
          // eslint-disable-next-line no-param-reassign
          state[id] = state[id] + 1 || 1;
        } else {
          // eslint-disable-next-line no-param-reassign
          state[id] = 1;
        }
      }
      appContext?.setCurrentCartState([state]);
    }
  };

  const decreaseQuantity = () => {
    const value: HTMLInputElement | null = document.querySelector(
      `.js_quantity${classKey}`,
    );
    if (value) {
      value.stepDown();
      if (appContext) {
        if (id.toString() in state) {
          // eslint-disable-next-line no-param-reassign
          state[id] = state[id] - 1 || 0;

          if (state[id] === 0) {
            delete state[id];
          }
        }
      }
      appContext?.setCurrentCartState([state]);
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
