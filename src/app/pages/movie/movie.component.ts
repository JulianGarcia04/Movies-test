import {
  Component,
  Input,
} from '@angular/core';
import {
  CommonModule,
  NgOptimizedImage,
} from '@angular/common';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { Movie } from 'src/app/models/movie';
import { Router } from '@angular/router';
import { AddWatchListButtonComponent } from 'src/app/components/add-watch-list-button/add-watch-list-button.component';
import { SeeTrailerVideoButtonComponent } from 'src/app/components/see-trailer-video-button/see-trailer-video-button.component';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    AddWatchListButtonComponent,
    SeeTrailerVideoButtonComponent,
  ],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  @Input() id!: string;

  get currMovie() {
    return this.moviesService.getById(
      this.id,
    ) as Movie;
  }

  constructor(
    private moviesService: MoviesService,
    private router: Router,
  ) {}
}
