import React from "react";
import "./RatingStars.scss";

interface RaitingStarsProps {
  stars: number;
  className?: string;
}

const RaitingStars: React.FC<RaitingStarsProps> = ({ stars, className }) => {
  const MAX_RAITING_STARS = 5;

  return (
    <div className={className}>
      {[...Array(Math.floor(stars))].map((star: string, index) => {
        return (
          <span className="star-black" key={star + index.toString()}>
            ★
          </span>
        );
      })}
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
