import React from "react";
import { CardsState } from "../../../utils/helpers/interfaces";

interface FavouritesButtonProps {
  className?: string;
  state: CardsState;
  id: string;
  children?: React.ReactNode;
}

const FavouritesButton: React.FC<FavouritesButtonProps> = ({
  className,
  state,
  id,
  children,
}) => {
  const addFavourite = () => {
    if (state.favourites.includes(Number(id))) {
      state.favourites.splice(state.favourites.indexOf(Number(id), 0), 1);
    } else {
      state.favourites.push(Number(id));
    }
  };

  return (
    <button type="button" className={className} onClick={addFavourite}>
      {children}
    </button>
  );
};

export default FavouritesButton;
