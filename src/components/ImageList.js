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
  if (loading) return <div>spinner...</div>;
  if (error) return <div>Something went wrong</div>;
  return (
    <div>
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
