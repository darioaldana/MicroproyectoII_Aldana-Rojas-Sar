import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { fetchMovies, base_url, fetchMoviesByName } from "../../../api/api";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function MoviesSection() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getMovies = async (page) => {
    const { data } = await fetchMovies(page);
    console.log(data);
    setMovies(data.results);
    setTotalPages(data.total_pages);
  };

  //   const getMovies = async (page) => {
  //     const { data } = await fetchMoviesByName("asdkjadsjadsijk", page);
  //     console.log(data);
  //     setMovies(data.results);
  //     setTotalPages(data.total_pages);
  //   };

  //   if (movies.length === 0) {
  //     return <h1 className="bg-white text-black py-20">Not found</h1>;
  //   }
  const updateMovies = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    getMovies(newPage);
    setCurrentPage(newPage);
  };

  useEffect(() => {
    getMovies(currentPage);
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl pt-6 pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col justify-between md:flex-row md:text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Soon to be released
          </h2>

          {/* Pagination */}
          <div className="mt-3 md:mt-0">
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <button
                onClick={() => updateMovies(currentPage - 1)}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                {/* Previous */}
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              {[
                currentPage > totalPages ? currentPage - 1 : currentPage,
                currentPage > totalPages ? currentPage - 2 : currentPage + 1,
                currentPage > totalPages ? currentPage - 3 : currentPage + 2,
              ].map((page) => (
                <button
                  key={page}
                  onClick={() => updateMovies(page)}
                  className={classNames(
                    page === currentPage
                      ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      : "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
                    ""
                  )}
                  aria-hidden="true"
                >
                  {page}
                </button>
              ))}
              {/* Next */}
              <button
                onClick={() => updateMovies(currentPage + 1)}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {movies.map((movie) => (
            <div key={movie.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={`${base_url}${movie.poster_path}`}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="pt-2">
                <h2 className="text-gray-900 font-semibold text-center">
                  <a href="">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {movie.original_title}
                  </a>
                </h2>
                <div className="flex">
                  <p className="mt-1 text-sm text-gray-500 font-semibold pr-2">
                    Language:{" "}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {movie.original_language}
                  </p>
                </div>
                <div className="flex">
                  <p className="mt-1 text-sm text-gray-500 font-semibold pr-2">
                    Popularity:{" "}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {movie.popularity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
