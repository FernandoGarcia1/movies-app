import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/libs/interface/movie.interface';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {

  @Input() movies: Movie[] = [];;


  constructor() {
    
   }

  ngOnInit(): void {
  }

  public currentSlide = 0;
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.movies.length - 1 : previous;   
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.movies.length ? 0 : next;    
  }
  

}
