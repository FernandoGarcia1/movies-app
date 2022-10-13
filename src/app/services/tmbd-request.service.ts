import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Genre, Movie } from '../libs/interface/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class TmbdRequestService {


  private _urlBase = 'https://api.themoviedb.org/3/';
  private _apiKey = 'e6b68961d381f9cdef9cf9e39d0fc3ad'
  constructor(public http: HttpClient) { }

  getPopularMovies(page: number){
    return this.http.get(
      `${this._urlBase}movie/popular?api_key=${this._apiKey}&language=es&page=1${page}`
    ).pipe(
      map((movies : any) => {        
        return movies
      })
    )
  }

  getMovie(id: string){    
    return this.http.get(
      `${this._urlBase}movie/${id}?api_key=${this._apiKey}&language=es&language=es&query=mortal kombat&page=1&include_adult=false`
    )
  }

  searchMovies(search: string): Observable <Movie[]>{
    return this.http.get<Movie[]>(
      `${this._urlBase}search/movie?api_key=${this._apiKey}&language=es&query=${search}&page=1&include_adult=false`
    ).pipe(
      map((movies : any) => {        
        return movies.results
      })  
    )
  }
  getMoviesGenres(genre: string, page: number): Observable<Genre>{
    return this.http.get<Genre>(
      `${this._urlBase}discover/movie?api_key=${this._apiKey}&language=es-MX&with_genres=${genre}&page=${page}` 
    )
  }

  getNewMovies(): Observable <Movie[]>{
    return this.http.get<Movie[]>(`${this._urlBase}movie/popular?api_key=${this._apiKey}`)
    .pipe(
      map((movies : any) => {        
        return movies.results
      })  
    )
  }

  getTrendingMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(`${this._urlBase}trending/movie/day?api_key=${this._apiKey}`)
    .pipe(
      map((movies : any) => {        
        return movies.results
      })  
    )
  }
}
