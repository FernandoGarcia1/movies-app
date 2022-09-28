import { AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmbdRequestService } from 'src/app/services/tmbd-request.service';

@Component({
  selector: 'app-generes',
  templateUrl: './generes.component.html',
  styleUrls: ['./generes.component.scss']
})
export class GeneresComponent implements OnInit, OnChanges {

  public idGenres: string='';
  public movies :any;

  constructor(public activatedRoute: ActivatedRoute, public tmbdRequest : TmbdRequestService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.tmbdRequest.searchMovies(this.idGenres).subscribe({
      next:(resp : any) =>{
        this.movies =resp.results;
        console.log('Aqui....form',resp.results)                
      }
    })  
  }
  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.idGenres = params['id'];        
        console.log(this.idGenres);
      }
    )
    

  }



}
