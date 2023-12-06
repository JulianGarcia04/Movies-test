import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movie/:id',
    component: MovieComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  exports: [RouterModule],
})
export class AppRoutingModule {}
