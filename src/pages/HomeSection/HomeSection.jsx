import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const movies = [
    {
        id: 550,
        original_title: "Fight Club",
        popularity: 71.544,
        poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        original_language: "en",
    },
    {
        id: 550,
        original_title: "Fight Club",
        popularity: 71.544,
        poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        original_language: "en",
    },
    {
        id: 550,
        original_title: "Fight Club",
        popularity: 71.544,
        poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        original_language: "en",
    },
    {
        id: 550,
        original_title: "Fight Club",
        popularity: 71.544,
        poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        original_language: "en",
    },
]

export function HomeSection() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="flex flex-col justify-between sm:flex-row sm:text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Soon to be released</h2>

                    {/* Pagination */}
                    <div className='mt-3 sm:mt-0'>
                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                            <a
                                href="#"
                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                {/* Previous */}
                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                            </a>
                            <a
                                href="#"
                                aria-current="page"
                                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                1
                            </a>
                            <a
                                href="#"
                                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                2
                            </a>
                            <a
                                href="#"
                                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                            >
                                3
                            </a>
                            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                                ...
                            </span>
                            <a
                                href="#"
                                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                            >
                                8
                            </a>
                            <a
                                href="#"
                                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                9
                            </a>
                            <a
                                href="#"
                                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                10
                            </a>
                            <a
                                href="#"
                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                {/* Next */}
                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                            </a>
                        </nav>
                    </div>
                </div>


                <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {movies.map((movie) => (
                        <div key={movie.id} className="group relative">
                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                <img
                                    src='https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className='pt-2'>
                                <h2 className="text-gray-900 font-semibold text-center">
                                    <a href="">
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {movie.original_title}
                                    </a>
                                </h2>
                                <div className='flex'>
                                    <p className="mt-1 text-sm text-gray-500 font-semibold pr-2">Language: </p>
                                    <p className="mt-1 text-sm text-gray-500">{movie.original_language}</p>
                                </div>
                                <div className='flex'>
                                    <p className="mt-1 text-sm text-gray-500 font-semibold pr-2">Popularity: </p>
                                    <p className="mt-1 text-sm text-gray-500">{movie.popularity}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}