/** @format */

import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import ImageCardList from "./ImageCardList";
import "../style/ImageList.scss";

const ImageList = () => {
  const { error, loading, data } = useCharacters();
  if (loading) return <div>spinner...</div>;
  if (error) return <div>Something went wrong</div>;
  return (
    <div className="masonry">
      {data.characters.results.map((character, index) => {
        return <ImageCardList data={character} key={index} />;
      })}
    </div>
  );
};

export default ImageList;
