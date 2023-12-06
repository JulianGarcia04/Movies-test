import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  AppRoutingModule,
  routes,
} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import {
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    MovieComponent,
  ],
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
    ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
