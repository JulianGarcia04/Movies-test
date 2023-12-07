import { HttpClient } from '@angular/common/http';
import {
  Injectable,
  inject,
} from '@angular/core';
import {
  Movie,
  MovieSchema,
} from 'src/app/models/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private _movies: Movie[] = [];

  private http = inject(HttpClient);

  constructor() {
    this.http
      .get<Movie[]>('/assets/data.json')
      .subscribe(
        (data) => {
          const m = data
            .filter((obj) => {
              return MovieSchema.safeParse(
                obj,
              ).success;
            })
            .map((obj) => {
              return MovieSchema.parse(
                obj,
              );
            });

          this._movies = m;
        },
        (err) => {
          console.error(err);
        },
      );
  }

  get movies() {
    return this._movies;
  }

  getById(movieID: string) {
    return this.movies.find((mov) => {
      return mov.id === movieID;
    });
  }
}
