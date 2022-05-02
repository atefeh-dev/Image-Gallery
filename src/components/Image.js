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
    <div className="character">
      <img src={data.character.image} width={750} height={750} />
      <div className="character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="charcter-episode">
          {data.character.episode.slice(0, 10).map((episode) => {
            return (
              <div>
                {episode.name}-<b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Image;
