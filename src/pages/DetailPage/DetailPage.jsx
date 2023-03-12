import { useContext, useEffect } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { fetchMovie, base_url } from "./../../api/api";
import { Loading } from "../../components/Loading";
import { MovieDetailContext } from "./context/DetailContext";

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function DetailPage() {
  const { movie, isLoading } = useContext(MovieDetailContext);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-white ">
      <div className="pt-0">
        {/* Back Button */}
        <div className="mx-auto max-w-2xl px-4 pt-4 sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <button
            type="button"
            className=" flex items-center py-2.5 px-3 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  lg:w-25"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="w-5 h-5 -ml-1"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
              />
            </svg>

            <div className="hidden sm:block ml-2">Go Back</div>
          </button>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-8 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-12 ">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Title */}
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {movie.original_title}
            </h1>

            {/* Release Date */}
            <div className="flex">
              <p className="font-medium text-gray-900 mr-2">
                Release date:{" "}
              </p>
              <p className="tracking-tight text-gray-900">
                {movie.release_date}
              </p>
            </div>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            {/* Budget */}
            <h3 className="text-sm font-medium text-gray-400">Budget</h3>
            <p className="text-3xl tracking-tight text-gray-900">
              ${movie.budget}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4, 5].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        movie.vote_average / 2 > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {movie.vote_count} votes
                </p>
              </div>
            </div>

            {/* Poster Image */}
            <div className="mt-10 aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                src={`${base_url}${movie.poster_path}`}
                alt={`${base_url}${movie.poster_path}`}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <a href={movie.homepage}>
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Go to {movie.original_title} site
              </button>
            </a>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Overview */}
            <div>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{movie.overview}</p>
              </div>
            </div>

            {/* Original language */}
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">
                Original Language
              </h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {movie.original_language}
                </p>
              </div>
            </div>

            {/* Genre List */}
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">
                Genre List
              </h3>

              <div className="mt-4">
                <ul
                  role="list"
                  className="list-disc space-y-2 pl-4 text-sm"
                >
                  {movie.genres.map((genre) => (
                    <li key={genre.id} className="text-gray-400">
                      <span className="text-gray-600">{genre.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Production Companies */}
        <div className="mx-auto flex-col max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8 mt-10 pb-10">
          <div className="mx-auto grid max-w-2xl grid-cols-2 gap-y-8 gap-x-8 pt-4 md:grid-cols-3 sm:pt-4 lg:mx-0 lg:max-w-none">
            {movie.production_companies.map((company) => (
              <figcaption key={company.logo_path}>
                <img

                  className="mx-auto resize-y  scale-50 rounded-2"
                  src={`${base_url}${company.logo_path}`}
                  alt=""
                />
              </figcaption>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

}
