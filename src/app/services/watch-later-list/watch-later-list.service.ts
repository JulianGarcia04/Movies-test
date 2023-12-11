import { Injectable } from '@angular/core';
import {
  Movie,
  MovieSchema,
} from 'src/app/models/movie';

@Injectable({
  providedIn: 'root',
})
export class WatchLaterListService {
  private _movies: Movie[] = [];

  private _key = 'watchLaterList';

  constructor() {
    this.update();
    window.addEventListener(
      'storage',
      (evt) => {
        if (evt.key === this._key) {
          const data = evt.newValue;
          this.update(data);
        }
      },
    );
  }

  get movies() {
    return this._movies;
  }

  private upload() {
    localStorage.setItem(
      this._key,
      JSON.stringify(this._movies),
    );
  }

  private update(
    data:
      | string
      | null = localStorage.getItem(
      this._key,
    ),
  ) {
    if (!data) {
      return;
    }

    const isMoviesList =
      MovieSchema.array().safeParse(
        JSON.parse(data),
      );

    const moviesProxy =
      isMoviesList.success
        ? isMoviesList.data
        : [];

    this._movies = [
      ...this._movies,
      ...moviesProxy,
    ];
  }

  add(movie: Movie) {
    this._movies.push(movie);
    this.upload();
  }

  remove(movieID: string) {
    const movieIdx =
      this._movies.findIndex((mov) => {
        return mov.id === movieID;
      });

    if (movieIdx === -1) {
      throw 'Error when was deleting the movie';
    }

    this._movies.splice(movieIdx, 1);
    this.upload();
  }

  getById(movieID: string) {
    return this._movies.find((mov) => {
      return mov.id === movieID;
    });
  }
}
