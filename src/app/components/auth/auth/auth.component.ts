import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public loginForm!: FormGroup;
  public auth: boolean = false;

  constructor(public authService: AuthService, private router: Router ){
    console.group('service: ', this.authService)
    
    
  }

  
  ngOnInit(): void {

    this.formLoginGroup();
    this.inputChanged()
    const PREVIEW_LOGIN = localStorage.getItem('movie-auth');
    if(PREVIEW_LOGIN?.toLowerCase() === 'true'){
      this.authService.auth = true;
      this.router.navigate(['/movie']);
    }
  }

  formLoginGroup(){
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    })
  }

  onLoginSubmit(){    
    const USERNAME = this.loginForm.get("username")?.value
    const PASSWORD = this.loginForm.get("password")?.value    
    let authorization = this.authService.login(USERNAME, PASSWORD);
    if( authorization){      
      this.auth = false;
      this.router.navigate(['/movie']);      
    }else{      
      this.auth = true;      
    }    
  }

  inputChanged() {            
   this.auth= false;
  }

}
