import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/libs/interface/movie.interface';
import { TmbdRequestService } from 'src/app/services/tmbd-request.service';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.scss']
})
export class ShowMovieComponent implements OnInit {

  public movie!: Movie;  
  public similarMovies: Movie[]=[];  
  constructor(public dataRequest : TmbdRequestService, public activatedRoute : ActivatedRoute ) { }
  public flagDescription: boolean = false;

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(
      params => {
        this.getMovie(params['id']);
      }
    )
  }

  getMovie(id : string){
    this.dataRequest.getMovie(id).subscribe({
      next:(resp : Movie) =>{
       this.movie=resp;           
       this.getSimilarMovies();       
       if(this.movie.overview !== ''){
        this.flagDescription = true;
       }
      }
    })
  }

  getSimilarMovies(){
    this.dataRequest.getSimilarMovies(this.movie.id).subscribe(
      {
        next:(resp : Movie[]) =>{
          this.similarMovies = resp.splice(0,10);            
        }
    }
    )
  }
}
