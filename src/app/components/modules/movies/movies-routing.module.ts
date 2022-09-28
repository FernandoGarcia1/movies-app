import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PopularComponent } from './pages/popular/popular.component';
import { ShowMovieComponent } from './pages/show-movie/show-movie.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { IndexComponent } from './pages/index/index.component';
import { TmdbResolver } from 'src/app/libs/resolvers/tmdb.resolver';



const routes : Routes = [
  {
    path: '',
    component: IndexComponent,
    resolve:{
      genres: TmdbResolver
    },
    children: [
      {
        path: 'popular',
        component:PopularComponent,
      },
      {
        path: 'movie/:id',
        component:ShowMovieComponent,
      },      
      {
        path: '',
        component:PrincipalComponent,
        pathMatch: 'full'
      },
      {
        path : '**',
        redirectTo : '/movie'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
