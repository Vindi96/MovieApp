import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { IndexGanresComponent } from './ganres/index-ganres/index-ganres.component';
import { HomeComponent } from './home/home.component';
import { CreateGanresComponent } from './ganres/create-ganres/create-ganres.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorsComponent } from './actors/create-actors/create-actors.component';
import { IndexTheatersComponent } from './theaters/index-theaters/index-theaters.component';
import { CreateTheatersComponent } from './theaters/create-theaters/create-theaters.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditGanresComponent } from './ganres/edit-ganres/edit-ganres.component';
import { EditActorsComponent } from './actors/edit-actors/edit-actors.component';
import { EditTheatersComponent } from './theaters/edit-theaters/edit-theaters.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    IndexGanresComponent,
    HomeComponent,
    CreateGanresComponent,
    IndexActorsComponent,
    CreateActorsComponent,
    IndexTheatersComponent,
    CreateTheatersComponent,
    CreateMovieComponent,
    EditGanresComponent,
    EditActorsComponent,
    EditTheatersComponent,
    EditMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
