import React from "react";

import IconButton from "./iconsButton";

// Define the prop types for the component
interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <IconButton className="search-button" onClick={handleClick}>
      <img src="images/searchButton.svg" alt="Search Icon" className="icon" />
    </IconButton>
  );
};

export default SearchButton;
