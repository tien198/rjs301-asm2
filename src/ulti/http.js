const API_KEY = 'f6fc0a2c87a3ce0eed84ff4ed4baaa35'
const BASE_URL = 'https://api.themoviedb.org/3'

const IMG_URL_ORIGIN = 'https://image.tmdb.org/t/p/original'
const IMG_URL_W500 = 'https://image.tmdb.org/t/p/w500'

export const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

// Get random from 20 movie results through 'fetchNetflixOriginals'
export async function getBanner() {
    const data = await getData(BASE_URL + requests.fetchNetflixOriginals)

    const results = data['results']

    const randomResult = results[randomInt(results.length)]

    return randomResult
}

export function generateImgUrl_Origin(path) {
    return IMG_URL_ORIGIN + path
}

export function generateImgUrl_W500(path) {
    return IMG_URL_W500 + path
}

async function getData(url) {
    const res = await fetch(url)
    return await res.json()
}

function randomInt(max) {
    return Math.floor(Math.random() * max - 1)
}