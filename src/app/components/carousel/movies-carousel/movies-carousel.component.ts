import {
  Component,
  Input,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from 'src/app/models/movie';
import { ImageMoviesCarouselComponent } from '../image-movies-carousel/image-movies-carousel.component';
import { AddWatchListButtonComponent } from '../../add-watch-list-button/add-watch-list-button.component';

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
}
