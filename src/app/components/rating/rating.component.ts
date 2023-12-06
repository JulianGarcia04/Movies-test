import {
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl:
    './rating.component.html',
})
export class RatingComponent {
  @Input() rating!: number;

  get ratingArr() {
    const arr: number[] = [];

    const parseRating = Math.round(
      this.rating / 2,
    );

    for (
      let i = 0;
      i < parseRating;
      i++
    ) {
      arr.push(i);
    }
    return arr;
  }
}
