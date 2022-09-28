import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbResolver implements Resolve<boolean> {
  constructor(private http : HttpClient){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=e6b68961d381f9cdef9cf9e39d0fc3ad&language=en-US'
    return this.http.get(url);
  }
}
