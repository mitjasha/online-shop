import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { WineInfo } from "../../utils/helpers/interfaces";
import "./SearchResult.scss";

interface SearchResultProps {
  data: WineInfo;
  classname?: string;
  id: number;
}

const SearchResult: React.FC<SearchResultProps> = ({ data, classname, id }) => {
  const classes = cn("search-result", classname);
  return (
    <div className={classes}>
      <Link
        className="search-result__link-container"
        to={`/product/${id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={data.images?.[0]}
          alt={data.title}
          className="search-result__image"
        />
        <h3 className="search-result__title">{data.title}</h3>
        <p className="search-result__rating">Rating: ★{data.rating}</p>
        <p className="search-result__price">{data.price}</p>
      </Link>
    </div>
  );
};

export default SearchResult;
