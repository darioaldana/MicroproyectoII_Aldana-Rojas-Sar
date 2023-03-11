import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { fetchMovie, base_url } from "./../../api/api";
import { Loading } from "../../components/Loading";

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function DetailPage() {
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getMovie = async () => {
    const { data } = await fetchMovie(1077280);
    console.log(data);
    setMovie(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  if (isLoading) {
    console.log("a");
    return <Loading />;
  }

  if (!isLoading) {
    console.log("b");
    return (
      <div className="bg-white">
        <div className="pt-6">
          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 ">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              {/* Title */}
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {movie.original_title}
              </h1>

              {/* Release Date */}
              <div className="flex">
                <p className="font-medium text-gray-900 mr-2">Release date: </p>
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
                  Go to {movie.original_title} side
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
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
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
            {/* <h3 className="text-sm font-medium text-gray-900">Production Companies</h3> */}

            <div className="mx-auto grid max-w-2xl grid-cols-2 gap-y-8 gap-x-8 pt-4 md:grid-cols-3 sm:pt-4 lg:mx-0 lg:max-w-none">
              {movie.production_companies.map((company) => (
                <figcaption>
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src={`${base_url}${company.logo_path}`}
                    alt=""
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900 text-center">
                      {company.name}
                    </div>
                  </div>
                </figcaption>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
