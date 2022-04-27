/** @format */

import { ApolloClient } from "@apollo/client";
import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
const ImageList = () => {
  const { error, data, loading } = useQuery(GET_CHARACTERS);
  console.log({ error, data, loading });
  return <div>hi list</div>;
};

export default ImageList;
