import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularComponent } from './pages/popular/popular.component';
import { ShowMovieComponent } from './pages/show-movie/show-movie.component';
import { LibsModule } from 'src/app/libs/libs.module';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from './pages/principal/search-form/search-form.component';
import { IndexComponent } from './pages/index/index.component';
import { GeneresComponent } from './pages/generes/generes.component';



@NgModule({
  declarations: [
    PopularComponent,
    ShowMovieComponent,
    PrincipalComponent,
    SearchFormComponent,
    IndexComponent,
    GeneresComponent,
    
  ],
  imports: [
    CommonModule,    
    LibsModule,
    RouterModule,
    MoviesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    PopularComponent,
    ShowMovieComponent,
    PrincipalComponent,
  ]
})
export class PagesModule { }
