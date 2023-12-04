import { Component, Input } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from 'src/app/models/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies-section',
  templateUrl: './movies-section.component.html',
  styleUrls: ['./movies-section.component.css'],
  imports: [MovieCardComponent, CommonModule],
  standalone: true,
})
export class MoviesSectionComponent {
  @Input() movies: Movie[] = [];
}
