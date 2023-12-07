import {
  Component,
  Input,
  signal,
} from '@angular/core';
import {
  CommonModule,
  NgOptimizedImage,
} from '@angular/common';

@Component({
  selector: 'app-image-movies-carousel',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  templateUrl:
    './image-movies-carousel.component.html',
})
export class ImageMoviesCarouselComponent {
  @Input() src!: string;

  @Input() alt!: string;

  height = signal(300);

  width = signal(200);

  rotationImage = signal([0, 0]);

  onMouseMoveInImage(evt: MouseEvent) {
    const { clientX, clientY } = evt;

    const yRotation =
      ((clientX - this.width() / 2) /
        this.width()) *
      20;

    const xRotation =
      ((clientY - this.height() / 2) /
        this.height()) *
      20;

    this.rotationImage.set([
      xRotation,
      yRotation,
    ]);
  }

  onMouseOutFromTheImage() {
    this.rotationImage.set([0, 0]);
  }

  get transformStyle() {
    const [x, y] = this.rotationImage();
    return `
      perspective(500px)
       scale(${
         x !== 0 && y !== 0 ? 1.1 : 1
       })
       rotateX(${x}deg)
       rotateY(${y}deg)
    `;
  }
}
