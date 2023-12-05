import {
  Component,
  Input,
  signal,
} from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from 'src/app/models/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies-section',
  templateUrl:
    './movies-section.component.html',
  styleUrls: [
    './movies-section.component.css',
  ],
  imports: [
    MovieCardComponent,
    CommonModule,
  ],
  standalone: true,
})
export class MoviesSectionComponent {
  @Input() movies: Movie[] = [];

  moviesOrder = signal<
    'title' | 'releasedDate'
  >('title');

  get sortedMovies() {
    return this.sortMovies();
  }

  onSelectOrderProperty(
    value: 'title' | 'releasedDate',
  ) {
    this.moviesOrder.set(value);
  }

  sortMovies() {
    this.movies.sort((a, b) => {
      if (
        this.moviesOrder() ===
        'releasedDate'
      ) {
        return a[this.moviesOrder()] <
          b[this.moviesOrder()]
          ? 1
          : -1;
      }

      if (
        this.moviesOrder() === 'title'
      ) {
        return a[this.moviesOrder()] >
          b[this.moviesOrder()]
          ? 1
          : -1;
      }

      return 0;
    });

    return this.movies;
  }
}
