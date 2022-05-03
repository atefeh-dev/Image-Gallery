/** @format */

import React from "react";
import { Link } from "react-router-dom";

const ImageCardList = (data) => {
  console.log(data.data.name);
  return (
    <Link to={`/${data.data.id}`}>
      <div className="masonry-brick">
        <div className="image-card masonry-content">
          <img className="image" src={data.data.image} />
          <div className="image-card--clickable-area" onClick={() => {}} />
          <div className="image-card--options">
            <div className="user-info">
              <h3>{data.data.name}</h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ImageCardList;
