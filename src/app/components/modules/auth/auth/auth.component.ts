import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(public authService: AuthService, private router: Router ){
    console.group('service: ', this.authService)
  }

  
  ngOnInit(): void {
    this.formLoginGroup();
    const PREVIEW_LOGIN = localStorage.getItem('movie-auth');
    if(PREVIEW_LOGIN?.toLowerCase() === 'true'){
      this.authService.auth = true;
      this.router.navigate(['/movie']);
    }
  }

  formLoginGroup(){
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  onLoginSubmit(){    
    const USERNAME = this.loginForm.get("username")?.value
    const PASSWORD = this.loginForm.get("password")?.value    
    this.authService.login(USERNAME, PASSWORD);
    this.router.navigate(['/movie']);
  }



}
