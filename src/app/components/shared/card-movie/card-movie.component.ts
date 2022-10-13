import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {

  @Input() movies: any;
  @Output() page = new EventEmitter<number>()
  @Input() numberPage: number =1;
  public numberColumns: number = 6;
  public numbersPage : number[] = [1,2,3,4,5];
  public paginator: boolean = true;

  constructor(public breakpointObserver: BreakpointObserver, private router: Router) { }

  

  ngOnInit(): void {
    this.mediaQuery();
    if(this.router.url.split('/').includes('search')){      
      this.paginator = false;
    }
    
  }    

  previousPage(){
    if(this.numberPage>1){
      this.numberPage-=1;
      this.page.emit(this.numberPage);
    }
  }
  nextPage(){      
    this.numberPage+=1;
    this.page.emit(this.numberPage);
  }

  refreshNumberPage(value: number){
    this.numberPage=value;
    this.page.emit(this.numberPage);
  }



  public mediaQuery() {

    this.breakpointObserver
    .observe(Breakpoints.XSmall)
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        //AQUI SERA TRUE SOLO SI ESTA EN RESOLUCION DE CELULAR
        this.numberColumns = 1;
      }
    });
      this.breakpointObserver
      .observe(Breakpoints.Small)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          //AQUI SERA TRUE SOLO SI ESTA EN RESOLUCION DE CELULAR
          this.numberColumns = 3;
        }
      });

    this.breakpointObserver
      .observe(Breakpoints.Medium)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          //AQUI SERA TRUE SOLO SI ESTA EN RESOLUCION DE Tablet
          this.numberColumns = 4;
        }
      });

    this.breakpointObserver
      .observe(Breakpoints.Large)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          //AQUI SERA TRUE SOLO SI ES RESOLUCION PARA WEB
          this.numberColumns = 5;
        }
      });

  }
  

}
