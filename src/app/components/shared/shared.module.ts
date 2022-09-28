import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CardMovieComponent } from './card-movie/card-movie.component';
import { LibsModule } from 'src/app/libs/libs.module';



@NgModule({
  declarations: [
    
    SidebarComponent,
    CardMovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LibsModule
  ],
  exports: [
    
    SidebarComponent,
    CardMovieComponent
  ]
})
export class SharedModule { }
