import axios from "axios";

const api_key = '6f6257afba895f0a52aa7a627d4e9aa1';

export async function fetchMovies(page = 1) {
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)
}

export async function fetchMovie(movie_id) {
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&language=en-US`)
}

export async function fetchUpcomingMovies(page = 1) {
    return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=${page}`)
}
export const base_url = 'https://image.tmdb.org/t/p/original';

// export async function fetchMoviesByName(page = 1, name) {
//     return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&name=${name}&page=${page}&include_adult=false`)
// }

/* const [movies, setMovies] = useState();

const getMovies = async () => {
    const { data } = await fetchMovies();
    setMovies(data.results)
}

useEffect(() => {
    getMovies()
}, []) */