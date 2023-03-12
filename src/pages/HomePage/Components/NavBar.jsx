import { useContext, useState } from 'react'
import { UilSignout } from '@iconscout/react-unicons'
import { MoviesContext } from "../context/MoviesContextProvider";
import { logout } from "./../../../firebase/auth"

export function NavBar() {
  const {
    getSearchMovies,
    setQuery,
  } = useContext(MoviesContext);

  const handleSearch = () => {
    getSearchMovies()
  };

  return (
    <header className="bg-white">
      <nav className="flex mx-auto max-w-2xl pt-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8 items-center justify-between" aria-label="Global">
        <div className="hidden lg:flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Movie App</h2>
          </a>
        </div>

        <div className="flex gap-x-2">
          <input
            type="text"
            name="search"
            id="search"
            onChange={(e) => {
              console.log(e.target.value)
              setQuery(e.target.value)
            }}
            className="bg-white block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
          <button
            onClick={handleSearch}
            className="relative rounded z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            aria-hidden="true"
          >
            Search
          </button>
        </div>


        <div className="flex flex-1 justify-end">
          <button onClick={logout} className="text-sm font-semibold leading-6 text-gray-900">
            <UilSignout className='h-7 w-7' />
          </button>
        </div>
      </nav>
    </header>
  );
}