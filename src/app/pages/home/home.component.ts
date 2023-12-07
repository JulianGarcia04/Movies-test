import { Component } from '@angular/core';
import { MoviesSectionComponent } from 'src/app/components/movies-section/movies-section.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { MoviesCarouselComponent } from 'src/app/components/carousel/movies-carousel/movies-carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    MoviesSectionComponent,
    HttpClientModule,
    MoviesCarouselComponent,
  ],
  standalone: true,
})
export class HomeComponent {
  constructor(
    private moviesService: MoviesService,
  ) {}

  get movies() {
    return this.moviesService.movies;
  }
}
