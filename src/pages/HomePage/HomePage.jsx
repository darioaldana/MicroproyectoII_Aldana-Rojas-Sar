import { UilMessage } from "@iconscout/react-unicons";
import { MovieList } from "./Components/MovieList";
import { MostRecent } from "./Components/MostRecent";
export function HomePage() {
  return (
    <div className="flex flex-col bg-white">
      <div className="overflow-x-auto   ">
        <div className="flex justify-between py-3 pl-2 lg:pl-10 pr-5 ">
          <div className="pl-2 font-bold pt-2 text-x-3 text-black text-sm pr-3 lg:pl-3 lg:text-xl ">
            <p>Directory Search</p>
          </div>
          <div>
            <form className="flex items-center pt-2 w-70 pl-0 lg:w-90">
              <label htmlFor="voice-search" className="sr-only">
                Search
              </label>
              <div className="relative ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="voice-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  placeholder="Search Movie..."
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  lg:w-25"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 -ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <div className="hidden sm:block">Search</div>
              </button>
            </form>
          </div>
          <div className=" flex-col items-center pb-10 pt-2 hidden sm:block">
            <img
              className="w-10 h-10 mb-3 rounded-full shadow-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
              alt="Bonnie image"
            />
          </div>
        </div>
        <div clasName="flex flex-row-reverse">
          <MovieList></MovieList>
        </div>
      </div>
    </div>
  );
}
