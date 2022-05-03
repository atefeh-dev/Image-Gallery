/** @format */

import React from "react";
import { useParams } from "react-router";
import { useCharacter } from "../hooks/useCharacter";
import "../style/image.scss";
const Image = () => {
  console.log(useParams());
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);

  if (error) return <div>something is wrong</div>;
  if (loading) return <div>spinner...</div>;

  return (
    <div className="img-container">
      <div className="card-container">
        <div className="card-img">
          <div className="front">
            <h2 className="sub-title-card">{data.character.name}</h2>
            <h1 className="title-card">{data.character.gender}</h1>
            <img className="image-frame" src={data.character.image} />
          </div>
          <div class="back">
            <h3 class="synopsis">Synopsis</h3>
            <p>
              Rick and Morty is an American adult animated television series
              created by Justin Roiland and Dan Harmon for Adult Swim. The
              series follows the misadventures of alcoholic scientist Rick and
              his easily influenced grandson Morty, who split their time between
              domestic family life and interdimensional travel.
              <hr />
              {data.character.episode.slice(0, 1).map((episode) => {
                return (
                  <div className="episod-name">
                    {episode.name}-<b>{episode.episode}</b>
                  </div>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Image;
