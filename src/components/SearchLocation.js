/** @format */
import React from "react";
import { useLocation } from "react-router-dom";

const SearchLocation = () => {
  const location = useLocation();

  console.log(location.state);
  return <div>result</div>;
};
export default SearchLocation;
