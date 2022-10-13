import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  opened = false;  
  constructor() { }

  ngOnInit(): void {
  }

  openMenu(change: boolean){    
    this.opened = change;
  }
}
