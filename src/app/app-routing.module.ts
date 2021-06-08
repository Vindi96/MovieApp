import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexGanresComponent } from './ganres/index-ganres/index-ganres.component';
import { CreateGanresComponent } from './ganres/create-ganres/create-ganres.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorsComponent } from './actors/create-actors/create-actors.component';
import { IndexTheatersComponent } from './theaters/index-theaters/index-theaters.component';
import { CreateTheatersComponent } from './theaters/create-theaters/create-theaters.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditGanresComponent } from './ganres/edit-ganres/edit-ganres.component';
import { EditActorsComponent } from 'src/app/actors/edit-actors/edit-actors.component';
import { EditTheatersComponent } from './theaters/edit-theaters/edit-theaters.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ganres', component: IndexGanresComponent },
  { path: 'ganres/create', component: CreateGanresComponent },
  { path: 'ganres/edit/:id', component: EditGanresComponent },
  { path: 'actors', component: IndexActorsComponent },
  { path: 'actors/create', component: CreateActorsComponent },
  { path: 'actors/edit/:id', component: EditActorsComponent },
  { path: 'theaters', component: IndexTheatersComponent },
  { path: 'theaters/create', component: CreateTheatersComponent },
  { path: 'theaters/edit/:id', component: EditTheatersComponent },
  { path: 'movies/create', component: CreateMovieComponent },
  { path: 'movies/edit/:id', component: EditMovieComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
