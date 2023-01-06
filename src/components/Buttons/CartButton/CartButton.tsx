import React from "react";
import { CardsState } from "../../../utils/helpers/interfaces";

interface CartButtonProps {
  className?: string;
  state: CardsState;
  id: string;
  children?: React.ReactNode;
}

const CartButton: React.FC<CartButtonProps> = ({
  className,
  state,
  id,
  children,
}) => {
  const addCart = () => {
    if (id in state.cart) {
      // eslint-disable-next-line no-param-reassign
      state.cart[id] = state.cart[id] + 1 || 1;
      console.log(state.cart[id]);
    } else {
      // eslint-disable-next-line no-param-reassign
      state.cart[id] = 1;
      console.log(state.cart);
    }
  };
  return (
    <button type="button" className={className} onClick={addCart}>
      {children}
    </button>
  );
};

export default CartButton;
