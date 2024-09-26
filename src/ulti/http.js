const API_KEY = 'f6fc0a2c87a3ce0eed84ff4ed4baaa35'
const BASE_URL = 'https://api.themoviedb.org/3'

const IMG_URL_ORIGIN = 'https://image.tmdb.org/t/p/original'
const IMG_URL_W500 = 'https://image.tmdb.org/t/p/w500'

export const requestsList = {
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

export function generateImgUrl_Origin(path) {
    return IMG_URL_ORIGIN + path
}

export function generateImgUrl_W500(path) {
    return IMG_URL_W500 + path
}

// Get random from 20 movie results through 'fetchNetflixOriginals'
// export async function getRandomData(dataArr) {
//     return dataArr[randomInt(dataArr.length)]
// }

export async function getData(url) {
    const res = await fetch(url)
    return await res.json()
}

export async function getOriginalList() {
    const url = BASE_URL + requestsList.fetchNetflixOriginals
    return await getData(url)
}

export async function getTrendingList() {
    const url = BASE_URL + requestsList.fetchTrending
    return await getData(url)
}


export async function getTopRatedList() {
    const url = BASE_URL + requestsList.fetchTopRated
    return await getData(url)
}

export async function getActionMoviesList() {
    const url = BASE_URL + requestsList.fetchActionMovies
    return await getData(url)
}

export async function getfetchComedyMoviesList() {
    const url = BASE_URL + requestsList.fetchComedyMovies
    return await getData(url)
}

export async function getHorrorMoviesList() {
    const url = BASE_URL + requestsList.fetchHorrorMovies
    return await getData(url)
}

export async function getRomanceMoviesList() {
    const url = BASE_URL + requestsList.fetchRomanceMovies
    return await getData(url)
}

export async function getDocumentariesList() {
    const url = BASE_URL + requestsList.fetchDocumentaries
    return await getData(url)
}

export async function getSearchList() {
    const url = BASE_URL + requestsList.fetchSearch
    return await getData(url)
}
