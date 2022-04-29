/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";
import "../style/ImageList.scss";

const ImageList = () => {
  const { error, loading, data } = useCharacters();
  if (loading) return <div>spinner...</div>;
  if (error) return <div>Something went wrong</div>;
  return (
    <div className="imageList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default ImageList;
