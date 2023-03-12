import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { fetchMovie } from "../../../api/api";

export const MovieDetailContext = React.createContext();

export function MovieDetailContextProvider({ children }) {
  const movieId = 1077280;
  // const movieId = useParams();

  const [movie, setMovie] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const getMovie = async (id) => {
    const { data } = await fetchMovie(id);
    setMovie(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovie(movieId);
  }, [
    movieId
    //params.id
  ]);

  return (
    <MovieDetailContext.Provider
      value={{
        movie,
        isLoading,
      }}
    >
      {children}
    </MovieDetailContext.Provider>
  );
}