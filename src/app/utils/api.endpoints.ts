export class ApiEndpoints{
    static MOVIE = 'movie/';
    static NEW_MOVIES = 'movie/popular';
    static MOVIE_GENRES='discover/movie';
    static TRENDING_MOVIES = 'trending/movie/day'
    static POPULAR_MOVIES = 'movie/top_rated';
    static POPULAR_SERIES = 'tv/popular';
    static GET_GENRES = 'genre/movie/list';    
    static getMoviesByGenre(id: string, page:number){
        return 'discover/movie?language=es-MX&with_genres='+id+'&page='+page;
    } 
    static getSimilarMovies(id:number){
        return `movie/${id}}/similar`;
    }
}