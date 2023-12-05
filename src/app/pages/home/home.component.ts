import {
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { MoviesSectionComponent } from 'src/app/components/movies-section/movies-section.component';
import {
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import {
  Movie,
  MovieSchema,
} from 'src/app/models/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    MoviesSectionComponent,
    HttpClientModule,
  ],
  standalone: true,
})
export class HomeComponent
  implements OnInit
{
  http = inject(HttpClient);

  movies = signal<Movie[]>([]);

  ngOnInit() {
    this.http
      .get<Movie[]>('/assets/data.json')
      .subscribe((data) => {
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

        this.movies.set(m);
      });
  }
}
