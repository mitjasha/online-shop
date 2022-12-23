import React from "react";
import "./SearchComponent.scss";

const SearchComponent: React.FC = () => {
  return (
    <form className="search">
      <input type="submit" className="search__submit" value="" />
      <input
        type="search"
        className="search__input"
        id="site-search"
        placeholder="Search"
      />
    </form>
  );
};

export default SearchComponent;
