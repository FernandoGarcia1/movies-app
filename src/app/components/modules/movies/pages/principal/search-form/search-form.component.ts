import { Component,  EventEmitter,  OnInit, Output, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TmbdRequestService } from 'src/app/services/tmbd-request.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  
  @Output() onSearchMovie : EventEmitter<any>= new EventEmitter()
  public searchForm!: FormGroup;
  private _titleSearch: string = '';

  constructor(public tmbdRequest : TmbdRequestService) { }
  ngOnInit(): void {
    this.formGroup();
    this._titleSearch=localStorage.getItem('title_search') || 'avengers';
    this.inLoadPage(this._titleSearch);
  }
  
  formGroup(){
    this.searchForm = new FormGroup({
      title: new FormControl('', [Validators.required])
    })
  }
  searchMovie(){
    console.log('search')  
    const TITLE_SEARCH = this.searchForm.get("title")?.value ;        
    this.tmbdRequest.searchMovies(TITLE_SEARCH).subscribe({
      next:(resp : any) =>{
        console.log('form',resp.results)        
        this.onSearchMovie.emit(resp.results.slice(0,6))
        if(resp.results.length > 0){
          localStorage.setItem('title_search', TITLE_SEARCH)          
        }
      }
    })
  }

    inLoadPage(title: string){
      this.tmbdRequest.searchMovies(title).subscribe({
        next:(resp : any) =>{
          console.log('form',resp.results)        
          this.onSearchMovie.emit(resp.results.slice(0,6))
        }
      })
    }

}

