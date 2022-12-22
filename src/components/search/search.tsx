import React from "react";
import "./search.scss";

const Search: React.FC = () => {
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

export default Search;
