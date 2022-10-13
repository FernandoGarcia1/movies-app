import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth: boolean = false; 
  
  constructor() { }

  login(username : string, password : string){
    if(username === 'admin' && password === 'admin'){
      this.auth = true;
      localStorage.setItem('movie-auth', 'true');      
      return true;
    }else{
      this.auth = false;
      console.log(this.auth)
      return false;
    }
  }

  logout(){
    this.auth = false;
    localStorage.removeItem('movie-auth');
  }
}
