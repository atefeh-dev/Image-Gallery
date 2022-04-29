/** @format */

export const useCharacterLocation = (name) => {
  const [getLocations, { error, loading, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATION,
    {
      variables: {
        name,
      },
    }
  );
  return {
    error,
    loading,
    data,
    called,
  };
};
