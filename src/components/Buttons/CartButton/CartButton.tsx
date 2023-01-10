import React from "react";
import { AppContextType, useAppContext } from "../../../context";

interface CartButtonProps {
  className?: string;
  id: number;
  children?: React.ReactNode;
  action: boolean;
}

const CartButton: React.FC<CartButtonProps> = ({
  className,
  id,
  children,
  action,
}) => {
  const appContext = useAppContext();
  const state: { [key: string]: number } = Object.assign(
    {},
    ...(appContext as AppContextType).currentCartState,
  );
  const addCart = () => {
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
  };

  const delCart = () => {
    if (appContext) {
      if (id.toString() in state) {
        delete state[id];
      }
    }
    appContext?.setCurrentCartState([state]);
  };

  return (
    <button
      type="button"
      className={className}
      onClick={action ? addCart : delCart}
    >
      {children}
    </button>
  );
};

export default CartButton;
