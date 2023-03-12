import React, { useEffect, useState } from "react";
import { fetchMovies, fetchUpcomingMovies, fetchSearch } from "../../../api/api";

export const MoviesContext = React.createContext();

export function MoviesContextProvider({ children }) {
  const [movies, setMovies] = useState();
  const [currentPage, setCurrentPage] = useState();
  const [totalPages, setTotalPages] = useState();

  const [query, setQuery] = useState();

  const [isAll, setIsAll] = useState();
  const [isSoonToBeReleased, setIsSoonToBeReleased] = useState();
  const [isSearch, setIsSearch] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getAllMovies = async (page) => {
    if (page < 1 || page > totalPages) return;
    const { data } = await fetchMovies(page);
    setMovies(data.results);
    setCurrentPage(data.page);
    setTotalPages(data.total_pages);
    setIsAll(true);
    setIsSoonToBeReleased(false);
    setIsSearch(false);
    setIsLoading(false);
  };

  const getSoonToBeReleasedMovies = async (page) => {
    if (page < 1 || page > totalPages) return;
    const { data } = await fetchUpcomingMovies(page);
    setMovies(data.results);
    setCurrentPage(data.page);
    setTotalPages(data.total_pages);
    setIsAll(false);
    setIsSoonToBeReleased(true);
    setIsSearch(false);
    setIsLoading(false);
  };

  const getSearchMovies = async (page = 1) => {
    if (page < 1 || page > totalPages) return;
    const { data } = await fetchSearch(query, page);
    setMovies(data.results);
    setCurrentPage(data.page);
    setTotalPages(data.total_pages);
    setIsAll(false);
    setIsSoonToBeReleased(false);
    setIsSearch(true);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        isAll,
        getAllMovies,
        isSoonToBeReleased,
        getSoonToBeReleasedMovies,
        isSearch,
        getSearchMovies,
        currentPage,
        isLoading,
        setQuery,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}