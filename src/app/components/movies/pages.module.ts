import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularComponent } from './pages/popular/popular.component';
import { ShowMovieComponent } from './pages/show-movie/show-movie.component';
import { LibsModule } from 'src/app/libs/libs.module';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { MoviesRoutingModule } from './movies-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './pages/index/index.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { GenreComponent } from './pages/genre/genre.component';
import { SearchMovieComponent } from './pages/search-movie/search-movie.component';
import { CarrouselComponent } from './pages/principal/carrousel/carrousel.component';




@NgModule({
  declarations: [
    PopularComponent,
    ShowMovieComponent,
    PrincipalComponent,    
    IndexComponent,
    GenreComponent,    
    SearchMovieComponent,
    CarrouselComponent,
    
    
  ],
  imports: [
    CommonModule,    
    LibsModule,
    RouterModule,
    MoviesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    PopularComponent,
    ShowMovieComponent,
    PrincipalComponent,
    SearchMovieComponent
  ]
})
export class PagesModule { }
