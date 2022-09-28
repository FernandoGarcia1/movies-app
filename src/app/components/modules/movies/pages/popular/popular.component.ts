import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TmbdRequestService } from 'src/app/services/tmbd-request.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
  
  public movies: any;
  constructor(public tmbdRequest : TmbdRequestService) { }

  ngOnInit(): void {
    this.getPopularMovies() 
  }

  getPopularMovies(){
    this.tmbdRequest.getPopularMovies().subscribe({
      next:(resp : any) =>{
        this.movies = resp.results;        
        this.movies = this.movies.slice(0, 6)       
      }
    })
  }
  onClick(id: string){    
  }
 



}
