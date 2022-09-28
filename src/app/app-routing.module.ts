import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/modules/movies/pages/principal/principal.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

const routes: Routes = [
  {
    path : '404',
    component : NotFoundComponent
  },  
  {
    path : 'movie',
    loadChildren: () => import('./components/modules/movies/pages.module').then(m => m.PagesModule),
  },
  {
    path : '',
    component : PrincipalComponent,
    pathMatch : 'full'
  },
  {
    path : '**',
    redirectTo : '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
