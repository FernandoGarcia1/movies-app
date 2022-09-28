import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PopularComponent } from './pages/popular/popular.component';
import { ShowMovieComponent } from './pages/show-movie/show-movie.component';


const routes : Routes = [
  {
    path: '',
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
        path : '**',
        redirectTo : 'popular'
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
