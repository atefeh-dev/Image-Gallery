/** @format */

import React from "react";
import { Link } from "react-router-dom";

const ImageCardList = (data) => {
  console.log(data.data.name);
  return (
    <div>
      <Link to={`/${data.data.id}`}>
        <img src={data.data.image} />
        <h2>{data.data.name}</h2>
      </Link>
    </div>
  );
};
export default ImageCardList;
