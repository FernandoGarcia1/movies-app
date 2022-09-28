import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmbdRequestService } from 'src/app/services/tmbd-request.service';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.scss']
})
export class ShowMovieComponent implements OnInit {

  public movie: any;  
  constructor(public tmbdRequest : TmbdRequestService, public activatedRoute : ActivatedRoute ) { }
  public flagDescription: boolean = false;

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(
      params => {
        this.getMovie(params['id']);
      }
    )
  }

  getMovie(id : string){
    this.tmbdRequest.getMovie(id).subscribe({
      next:(resp : any) =>{
       this.movie=resp;           
       console.log(this.movie);   
       if(this.movie.overview !== ''){
        this.flagDescription = true;
       }
      }
    })
  }
}
