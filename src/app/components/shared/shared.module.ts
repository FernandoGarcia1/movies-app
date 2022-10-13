import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CardMovieComponent } from './card-movie/card-movie.component';
import { LibsModule } from 'src/app/libs/libs.module';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HorizontalCardMovieComponent } from './horizontal-card-movie/horizontal-card-movie.component';



@NgModule({
  declarations: [
    
    SidebarComponent,
    CardMovieComponent,
    HeaderComponent,
    HorizontalCardMovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LibsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    
    SidebarComponent,
    CardMovieComponent,
    HeaderComponent,
    HorizontalCardMovieComponent
  ]
})
export class SharedModule { }
