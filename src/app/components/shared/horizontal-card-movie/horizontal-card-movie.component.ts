import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-card-movie',
  templateUrl: './horizontal-card-movie.component.html',
  styleUrls: ['./horizontal-card-movie.component.scss']
})
export class HorizontalCardMovieComponent implements OnInit {

  @Input() movies: any;
  constructor() { }

  ngOnInit(): void {
  }

}
