import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from 'src/app/libs/interface/movie.interface';
import { TmbdRequestService } from 'src/app/services/tmbd-request.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  public movies: Movie[]=[];
  public search: string ='';

  constructor(public activatedRoute: ActivatedRoute, public dataRequest : TmbdRequestService) { }  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(      
      (params: Params) => {
        this.search = params['movie']; 
        this.dataRequest.searchMovies(this.search).subscribe({
          next:(movies : Movie[]) =>{
            this.movies = movies;
           }
        })        
      }
    )
  }

}
