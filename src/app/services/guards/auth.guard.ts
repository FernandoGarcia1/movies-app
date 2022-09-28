import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(public authService: AuthService, public router: Router) {
    console.group('service: ', this.authService)
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.authService.auth)
    if(this.authService.auth ===true){
      return this.authService.auth;
    }else{
      console.log('guard-false',)
      this.router.navigate(['']);      
    }
    return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.auth ===true){
        return this.authService.auth;
      }else{
        console.log('guard-false',)
        this.router.navigate(['']);      
      }
      return false;
      
  }
}
