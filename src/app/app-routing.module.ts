import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth/auth.component';

import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [  
  {
    path : 'movie',
    loadChildren: () => import('./components/movies/pages.module').then(m => m.PagesModule),
    canLoad: [AuthGuard],
    canActivate:[AuthGuard],
  },
  {
    path : 'admin',
    component : AuthComponent,
    pathMatch : 'full'
  },
  {
    path : '**',
    redirectTo : 'admin'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
