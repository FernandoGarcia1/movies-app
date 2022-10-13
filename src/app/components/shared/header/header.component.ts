import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() openMenu =new EventEmitter<boolean>();
    
  constructor(private router: Router) { }
  public opened = false;
  public searchMovie: FormControl = new FormControl('');
  ngOnInit(): void {
  }
  onMenu(change: boolean){
    this.openMenu.emit(change);
  }

  onSearchMovie(){    
    
    this.router.navigate(['movie/search/'+this.searchMovie.value])
    this.searchMovie.setValue('');
  }


}
