/** @format */

import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import ImageCardList from "./ImageCardList";
import { Grid } from "react-loader-spinner";

import "../style/ImageList.scss";

const ImageList = () => {
  const { error, loading, data } = useCharacters();
  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid height="70" width="70" color="grey" ariaLabel="loading" />
      </div>
    );
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
