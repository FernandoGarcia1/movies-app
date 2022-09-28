import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TmbdRequestService } from 'src/app/services/tmbd-request.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  
  public movie: any;
  public movies: any;
  

  constructor(public tmbdRequest : TmbdRequestService) { }

  ngOnInit(): void {          
    this.getPrincipalMovie()     
  }

  getPrincipalMovie(){
    const ID_PRINCIPAL: string= Math.floor(Math.random() * 19) + 1 +'';
    this.tmbdRequest.getPopularMovies().subscribe({
      next:(resp : any) =>{
       this.movie=resp.results[ID_PRINCIPAL];                                
      }
    })
  }
  
  onSearchMovie(movies: any){
   this.movies = movies; 
  }
    

}
