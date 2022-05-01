/** @format */
import React from "react";
import { useLocation } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

const SearchLocation = () => {
  const location = useLocation();
  if (location.state == null) return <NotFoundPage />;

  if (!location.state.data.characters) return <NotFoundPage />;
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
