import React from "react";
import "./SearchComponent.scss";

interface SearchComponentProps {
  searchedKeyword?: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  searchedKeyword,
  onSearchChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event);
  };

  return (
    <form className="search">
      <input type="submit" className="search__submit" value="" />
      <input
        type="search"
        className="search__input"
        id="site-search"
        placeholder="Search"
        value={searchedKeyword}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchComponent;
