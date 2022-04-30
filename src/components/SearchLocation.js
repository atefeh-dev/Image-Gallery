/** @format */
import React from "react";
import { useLocation } from "react-router-dom";

const SearchLocation = () => {
  const location = useLocation();

  console.log(location.state.data.characters);
  return (
    <div>
      <ul>
        {location.state.data.characters.results.map((character) => {
          return <li>{character.location.name}</li>;
        })}
      </ul>
    </div>
  );
};
export default SearchLocation;
