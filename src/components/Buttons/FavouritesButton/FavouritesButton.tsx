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
    const cardList = document.querySelectorAll(
      ".goods-card__action-btn img.favorities",
    );

    if (state.favourites.includes(Number(id))) {
      state.favourites.splice(state.favourites.indexOf(Number(id), 0), 1);
      cardList[Number(id)].classList.remove("like");
    } else {
      state.favourites.push(Number(id));
      cardList[Number(id)].classList.add("like");
    }
  };

  return (
    <button type="button" className={className} onClick={addFavourite}>
      {children}
    </button>
  );
};

export default FavouritesButton;
