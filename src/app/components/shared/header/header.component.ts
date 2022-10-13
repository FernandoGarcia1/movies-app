import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { Movie } from 'src/app/libs/interface/movie.interface';
import { AuthService } from 'src/app/services/auth.service';
import { TmbdRequestService } from 'src/app/services/tmbd-request.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() openMenu =new EventEmitter<boolean>();    
  public opened = false;
  public searchMovie: FormControl = new FormControl('');
  public movies : Movie[] = [];
  public viewSearchResponse : boolean = false;
  
  constructor(private router: Router, private dataRequest: TmbdRequestService, public authService: AuthService) { }
  ngOnInit(): void {
  }
  onMenu(change: boolean){
    this.openMenu.emit(change);
  }

  onSearchMovie(){    
    
    this.router.navigate(['movie/search/'+this.searchMovie.value])
    this.searchMovie.setValue('');
  }

  focusSearch(){
    this.viewSearchResponse=true;
    this.searchMovie.valueChanges
        .pipe(          
          debounceTime(500) // tiempo de espera
        )
        .subscribe(res=> {                    
          this.dataRequest.searchMovies(res).subscribe({
            next:(movies : Movie[]) =>{
              this.movies = movies.splice(0,5);
              console.log(this.movies)
             }
          })        
        })
        ;
  }

  leaveSearch(){
    this.viewSearchResponse=false;
  }

  onLogout(){    
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
