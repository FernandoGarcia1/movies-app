import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public genres: any;
  constructor(public authService: AuthService, private router: Router, public activatedRoute: ActivatedRoute){}
  
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      data => {
        console.log(data['genres'].genres.slice(0,10));
        this.genres=data['genres'].genres.slice(0,10);
      }
    )
  }

  onLogout(){
    console.log("logout");
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
