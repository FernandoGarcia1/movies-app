import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, tap } from 'rxjs';
import { Genre, Movie} from 'src/app/libs/interface/movie.interface';
import { TmbdRequestService } from 'src/app/services/tmbd-request.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  private idGenre: string='';  
  public listMovies: Movie[]=[];    
  private lastGenre : string ='';
  private actualGenre: string =''   
  public page: number = 1;

  constructor(public activatedRoute: ActivatedRoute, public dataRequest : TmbdRequestService) { }

  ngOnInit(): void {    
    this.actualGenre=this.activatedRoute?.snapshot.params['genres']    
    this.getMoviesByGenre();
    this.activatedRoute.params.subscribe(      
      (params: Params) => {
        this.page =1;
        this.lastGenre = this.actualGenre;        
        this.idGenre = params['genres'];
        if(this.lastGenre !== this.idGenre){          
          this.getMoviesByGenre();          
        }                
      }
    );
  }
  getMoviesByGenre(){    
    this.dataRequest.getMoviesGenres(this.idGenre, this.page).subscribe({
      next:(resp : Genre) =>{                              
        this.listMovies = resp.results;        
      }
    })
  }

  refreshNumberPage(page: number){
    console.log(this.page)
    this.page = page;
    this.getMoviesByGenre();
  }
 
}
