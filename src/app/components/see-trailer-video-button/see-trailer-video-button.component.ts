import {
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector:
    'app-see-trailer-video-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl:
    './see-trailer-video-button.component.html',
})
export class SeeTrailerVideoButtonComponent {
  @Input() youtubeUrl!: string;
}
