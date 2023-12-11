import {
  Component,
  Input,
  NgZone,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import {
  CommonModule,
  DOCUMENT,
} from '@angular/common';
import { Movie } from 'src/app/models/movie';
import { ImageMoviesCarouselComponent } from '../image-movies-carousel/image-movies-carousel.component';
import { AddWatchListButtonComponent } from '../../add-watch-list-button/add-watch-list-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-carousel',
  standalone: true,
  imports: [
    CommonModule,
    ImageMoviesCarouselComponent,
    AddWatchListButtonComponent,
  ],
  templateUrl:
    './movies-carousel.component.html',
  styleUrls: [
    './movies-carousel.component.css',
  ],
})
export class MoviesCarouselComponent
  implements OnInit
{
  @Input() movies!: Movie[];

  count = signal<number>(0);

  private readonly document = inject<
    Document & {
      startViewTransition: (
        callback: () => void,
      ) => object;
    }
  >(DOCUMENT);
  ngZone = inject(NgZone);

  constructor(private router: Router) {}

  get backgroundImage() {
    return `
      background-image: url('${this.currMovie.image}');
    `;
  }

  get currMovie() {
    return this.movies[this.count()];
  }

  ngOnInit(): void {
    setInterval(() => {
      if (
        this.count() >=
        this.movies.length
      ) {
        this.count.set(0);
        return;
      }
      this.count.set(this.count() + 1);
    }, 10000);
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
              this.currMovie.id,
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
                  this.currMovie.id,
                ],
              );
            });
          },
        );
        return;
      },
    );
  }
}
