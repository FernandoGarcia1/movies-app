import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public viewGenres: boolean = false;
  public genres: any;  
  constructor(public authService: AuthService, private router: Router, public activatedRoute: ActivatedRoute){}
  
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      data => {        
        this.genres=data['genres'].genres;
      }
    )
  }
  onLogout(){
    console.log("logout");
    this.authService.logout();
    this.router.navigate(['/']);
  }

  onViewGenres(){
    this.viewGenres= !this.viewGenres;
    console.log("viewGenres",this.viewGenres);
  }  
  
}