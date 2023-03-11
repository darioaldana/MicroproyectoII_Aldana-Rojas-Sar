import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'

const movie = {
    original_title: "Fight Club",
    genres: [
        {
            id: 18,
            name: "Drama"
        }, {
            id: 53,
            name: "Thriller"
        }, {
            id: 35,
            name: "Comedy"
        }
    ],
    original_language: "en",
    budget: 63000000,
    overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    vote_average: 8.431,
    production_companies: [
        {
            id: 508,
            logo_path: "/7cxRWzi4LsVm4Utfpr1hfARNurT.png",
            name: "Regency Enterprises",
            origin_country: "US"
        }, {
            id: 711,
            logo_path: "/tEiIH5QesdheJmDAqQwvtN60727.png",
            name: "Fox 2000 Pictures",
            origin_country: "US"
        }, {
            id: 20555,
            logo_path: "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
            name: "Taurus Film",
            origin_country: "DE"
        }, {
            id: 54051,
            logo_path: null,
            name: "Atman Entertainment",
            origin_country: ""
        }, {
            id: 54052,
            logo_path: null,
            name: "Knickerbocker Films",
            origin_country: "US"
        }, {
            id: 4700,
            logo_path: "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
            name: "The Linson Company",
            origin_country: "US"
        }, {
            id: 25,
            logo_path: "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
            name: "20th Century Fox",
            origin_country: "US"
        },
    ],
    release_date: "1999-10-15",
    status: "Released",
    vote_count: 25974,
    homepage: "http://www.foxmovies.com/movies/fight-club",
}

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function DetailPage() {
    console.log(movie.homepage);
    return (
        <div className="bg-white">
            <div className="pt-6">
                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 ">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        {/* Title */}
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{movie.original_title} ({movie.status})</h1>

                        {/* Release Date */}
                        <div className='flex'>
                            <p className="font-medium text-gray-900 mr-2">Release date: </p>
                            <p className="tracking-tight text-gray-900"> {movie.release_date}</p>
                        </div>
                    </div>

                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        {/* Budget */}
                        <h3 className="text-sm font-medium text-gray-400">Budget</h3>
                        <p className="text-3xl tracking-tight text-gray-900">${movie.budget}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4, 5].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                (movie.vote_average / 2) > rating ? 'text-gray-900' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
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
                                src={product.images[1].src}
                                alt={product.images[1].alt}
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
                            <h3 className="text-sm font-medium text-gray-900">Original Language</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{movie.original_language}</p>
                            </div>
                        </div>

                        {/* Genre List */}
                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Genre List</h3>

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
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                    <div className="font-semibold text-gray-900 text-center">{company.name}</div>
                                </div>
                            </figcaption>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}