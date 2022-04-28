/** @format */

import React from "react";
import { useCharacter } from "../hooks/useCharacters";
import "../style/ImageList.scss";

const ImageList = () => {
  const { error, loading, data } = useCharacter();
  if (loading) return <div>spinner...</div>;
  if (error) return <div>Something went wrong</div>;
  return (
    <div className="imageList">
      {data.characters.results.map((character) => {
        return (
          <div>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
