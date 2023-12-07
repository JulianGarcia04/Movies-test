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

  private update() {
    const data = localStorage.getItem(
      this._key,
    );

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

    console.log(this._movies);

    this.upload();
  }

  getById(movieID: string) {
    return this._movies.find((mov) => {
      return mov.id === movieID;
    });
  }
}
