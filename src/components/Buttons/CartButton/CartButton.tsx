import React from "react";
import { AppContextType, useAppContext } from "../../../context";

interface CartButtonProps {
  className?: string;
  id: number;
  children?: React.ReactNode;
}

const CartButton: React.FC<CartButtonProps> = ({ className, id, children }) => {
  const appContext = useAppContext();
  const addCart = () => {
    const state: { [key: string]: number } = Object.assign(
      {},
      ...(appContext as AppContextType).currentState,
    );

    if (appContext) {
      if (id.toString() in state) {
        // eslint-disable-next-line no-param-reassign
        state[id] = state[id] + 1 || 1;
      } else {
        // eslint-disable-next-line no-param-reassign
        state[id] = 1;
      }
    }
    appContext?.setCurrentState([state]);
  };
  return (
    <button type="button" className={className} onClick={addCart}>
      {children}
    </button>
  );
};

export default CartButton;
