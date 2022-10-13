import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Genre, Movie } from '../libs/interface/movie.interface';
import { Constants } from '../utils/constants.class';
import { ApiEndpoints } from '../utils/api.endpoints';

@Injectable({
  providedIn: 'root'
})
export class TmbdRequestService {


  
  private _apiKey = 'e6b68961d381f9cdef9cf9e39d0fc3ad'
  constructor(public http: HttpClient) { }

  getPopularMovies(page: number){
    return this.http.get(
      `${Constants.API_URL}${ApiEndpoints.NEW_MOVIES}?page=${page}`
    ).pipe(
      map((movies : any) => {        
        return movies
      })
    )
  }

  getMovie(id: string): Observable<Movie> {    
    return this.http.get<Movie>(
      `${Constants.API_URL}${ApiEndpoints.MOVIE}/${id}?page=1`
    )
  }

  searchMovies(search: string): Observable <Movie[]>{
    return this.http.get<Movie[]>(
      `${Constants.API_URL}search/movie?query=${search}&page=1`
    ).pipe(
      map((movies : any) => {        
        return movies.results
      })  
    )
  }
  getMoviesGenres(genre: string, page: number): Observable<Genre>{
    return this.http.get<Genre>(
      `${Constants.API_URL}${ApiEndpoints.MOVIE_GENRES}?with_genres=${genre}&page=${page}` 
    )
  }

  getNewMovies(): Observable <Movie[]>{
    return this.http.get<Movie[]>(`${Constants.API_URL}${ApiEndpoints.NEW_MOVIES}`)
    .pipe(
      map((movies : any) => {        
        return movies.results
      })  
    )
  }

  getTrendingMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(`${Constants.API_URL}${ApiEndpoints.TRENDING_MOVIES}`)
    .pipe(
      map((movies : any) => {        
        return movies.results
      })  
    )
  }

  getSimilarMovies(id: number) : Observable<Movie[]>{
    return this.http.get<Movie[]>(`${Constants.API_URL}${ApiEndpoints.getSimilarMovies(id)}`)
    .pipe(
      map((movies : any) => {        
        return movies.results
      })  
    )  
  }
}
