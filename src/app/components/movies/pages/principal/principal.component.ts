import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Movie } from 'src/app/libs/interface/movie.interface';
import { TmbdRequestService } from 'src/app/services/tmbd-request.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  
  public movie: any;  
  public newMovies:any;
  public trendingMovies:Movie[] = [];
  

  constructor(public dataRequest : TmbdRequestService) { }

  ngOnInit(): void {          
    this.getPrincipalMovie()     
    this.getNewMovies()
    this.getTrendingMovies()
  }

  getNewMovies(){
    this.dataRequest.getNewMovies().subscribe({
      next:(movies : Movie[]) =>{        
        this.newMovies = movies;                
      }
    })
  }

  getTrendingMovies(){
    this.dataRequest.getTrendingMovies().subscribe({
      next:(movies : Movie[]) =>{        
        this.trendingMovies = movies;                
      }
    })
  }


  getPrincipalMovie(){
    const ID_PRINCIPAL: string= Math.floor(Math.random() * 19) + 1 +'';
    this.dataRequest.getPopularMovies(1).subscribe({
      next:(resp : any) =>{
       this.movie=resp.results[ID_PRINCIPAL];                                
      }
    })
  }



  

}
