import {
  CommonModule,
  NgOptimizedImage,
} from '@angular/common';
import {
  Component,
  Input,
} from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { WatchLaterListService } from 'src/app/services/watch-later-lits/watch-later-list.service';

@Component({
  selector: 'app-movie-card',
  templateUrl:
    './movie-card.component.html',
  styleUrls: [
    './movie-card.component.css',
  ],
  imports: [
    NgOptimizedImage,
    CommonModule,
  ],
  standalone: true,
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  constructor(
    private watchList: WatchLaterListService,
  ) {}

  get isWatchLaterList() {
    return (
      this.watchList.getById(
        this.movie.id,
      ) != null
    );
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
