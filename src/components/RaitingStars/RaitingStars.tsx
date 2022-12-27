import React from "react";
import "./RaitingStars.scss";

interface RaitingStarsProps {
  stars: number;
}

const RaitingStars: React.FC<RaitingStarsProps> = ({ stars }) => {
  const MAX_RAITING_STARS = 5;

  return (
    <div>
      {[...Array(Math.floor(stars) || MAX_RAITING_STARS)].map(
        (star: string, index) => {
          return (
            <span className="star-black" key={star + index.toString()}>
              ★
            </span>
          );
        },
      )}
      {[...Array(MAX_RAITING_STARS - Math.floor(stars) || 0)].map(
        (star: string, index) => {
          return (
            <span className="star-white" key={star + index.toString()}>
              ★
            </span>
          );
        },
      )}
    </div>
  );
};

export default RaitingStars;
