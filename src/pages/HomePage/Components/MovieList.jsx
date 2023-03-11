import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export function MovieList() {
  return (
    <>
      <div className="container mx-auto py-3 px-4 flex">
        <div className="px-2o  max-w-xs sm:max-w-xs lg:max-w-lg lg:flex bg-white rounded-lg border shadow-lg pb-6 lg:pb-0">
          <div className="w-full lg:w-1/3 lg:p-4">
            <img
              src="https://source.unsplash.com/nqEJ548Hqjs/800x600"
              alt="image"
              className="h-64 lg:h-full object-cover object-center w-full"
            />
          </div>

          <div className="w-full lg:w-2/3 p-4">
            <div className="inline-grid">
              <p className="work-sans font-semibold text-xl text-black">
                Segoe cute
              </p>

              <p className="raleway text-sm my-4 text-black opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem fuga odit repellendus vero iure alias accusamus
                ex sed facilis magni aperiam dicta obcaecati, possimus rerum,
                consequuntur deserunt aut dolor ipsa.
              </p>
            </div>
          </div>
        </div>
        <div className=" max-w-xs sm:max-w-xs lg:max-w-lg lg:flex bg-white rounded-lg border shadow-lg pb-6 lg:pb-0">
          <div className="w-full lg:w-1/3 lg:p-4">
            <img
              src="https://source.unsplash.com/nqEJ548Hqjs/800x600"
              alt="image"
              className="h-64 lg:h-full object-cover object-center w-full"
            />
          </div>

          <div className="w-full lg:w-2/3 p-4">
            <div className="inline-grid">
              <p className="work-sans font-semibold text-xl text-black">
                Segoe cute
              </p>

              <p className="raleway text-sm my-4 text-black opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem fuga odit repellendus vero iure alias accusamus
                ex sed facilis magni aperiam dicta obcaecati, possimus rerum,
                consequuntur deserunt aut dolor ipsa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 px-10 flex-row-reverse">
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <a
            href="#"
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
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
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </>
  );
}
