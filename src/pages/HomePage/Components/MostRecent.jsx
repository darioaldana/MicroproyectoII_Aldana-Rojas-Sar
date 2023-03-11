export function MostRecent() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group relative">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <img
                src="https://media.gettyimages.com/id/512826176/es/foto/im%C3%A1genes-de-vista-a%C3%A9rea-ciudad-vista-de-caracas-con-el-%C3%A1vila.jpg?s=612x612&w=gi&k=20&c=fQAHDuImwItvoWwPnTACqzD5Jj4MUciTo0qNygXXd7o="
                alt="Cargando...."
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Name
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Sinopsis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
