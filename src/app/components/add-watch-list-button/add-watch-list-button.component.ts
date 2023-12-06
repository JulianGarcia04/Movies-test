import {
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchLaterListService } from 'src/app/services/watch-later-list/watch-later-list.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-add-watch-list-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl:
    './add-watch-list-button.component.html',
})
export class AddWatchListButtonComponent {
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

  onClickAdd() {
    this.watchList.add(this.movie);
    alert('add correctly');
  }

  onClickRemove() {
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
