import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmbdRequestService {


  private _urlBase = 'https://api.themoviedb.org/3/';
  private _apiKey = 'e6b68961d381f9cdef9cf9e39d0fc3ad'
  constructor(public http: HttpClient) { }

  getPopularMovies(){
    return this.http.get(
      `${this._urlBase}movie/popular?api_key=${this._apiKey}&language=es&page=1`
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

  searchMovies(search: string){
    return this.http.get(
      `${this._urlBase}search/movie?api_key=${this._apiKey}&language=es&query=${search}&page=1&include_adult=false`
    )
  }
}
