import {
  CommonModule,
  DOCUMENT,
  NgOptimizedImage,
} from '@angular/common';
import {
  Component,
  Input,
  inject,
} from '@angular/core';
import {
  Router,
  RouterModule,
} from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { WatchLaterListService } from 'src/app/services/watch-later-list/watch-later-list.service';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl:
    './movie-card.component.html',
  imports: [
    NgOptimizedImage,
    CommonModule,
    RouterModule,
  ],
  standalone: true,
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  private readonly document = inject<
    Document & {
      startViewTransition: (
        callback: () => void,
      ) => object;
    }
  >(DOCUMENT);
  ngZone = inject(NgZone);

  constructor(
    private watchList: WatchLaterListService,
    private router: Router,
  ) {}

  get isWatchLaterList() {
    return (
      this.watchList.getById(
        this.movie.id,
      ) != null
    );
  }

  navigate() {
    this.ngZone.runOutsideAngular(
      () => {
        if (
          !this.document
            .startViewTransition
        ) {
          this.ngZone.run(() => {
            void this.router.navigate([
              'movie',
              this.movie.id,
            ]);
          });
          return;
        }
        this.document.startViewTransition(
          () => {
            this.ngZone.run(() => {
              void this.router.navigate(
                [
                  'movie',
                  this.movie.id,
                ],
              );
            });
          },
        );
        return;
      },
    );
  }

  get styles() {
    return `view-transition-name: movie-${this.movie.id};`;
  }

  get movieUrl() {
    return `movie/${this.movie.id}`;
  }

  addToWatchLaterList() {
    this.watchList.add(this.movie);
    alert('add correctly');
  }

  removeFromWatchLaterList() {
    try {
      this.watchList.remove(
        this.movie.id,
      );
      alert(
        'The movie was delete correctly',
      );
    } catch (error) {
      alert(error);
    }
  }
}
