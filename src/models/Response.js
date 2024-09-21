export class Response {
    constructor(page, results, total_pages, total_results) {
        this.page = page
        this.results = results
        this.total_pages = total_pages
        this.total_results = total_results
    }
}

export class Result {
    constructor(obj) {
        this.adult = obj.adult
        this.backdrop_path = obj.backdrop_path
        this.first_air_date = obj.first_air_date
        this.genre_ids = obj.genre_ids
        this.id = obj.id
        this.name = obj.name
        this.origin_country = obj.origin_country
        this.original_language = obj.original_language
        this.original_name = obj.original_name
        this.overview = obj.overview
        this.popularity = obj.popularity
        this.poster_path = obj.poster_path
        this.vote_average = obj.vote_average
        this.vote_count = obj.vote_count
    }
}

