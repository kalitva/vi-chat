import { Component, Input } from '@angular/core';
import { randomFromRange } from 'src/app/lib/utils';

const INITIAL_TURTLE_POSITION = 100;

@Component({
  selector: 'app-flowers-background[flyTheTurtle]',
  templateUrl: './flowers-background.component.html',
  styleUrls: ['./flowers-background.component.scss'],
})
export class FlowersBackgroundComponent {
  @Input() flyTheTurtle: boolean;

  startTurtleFromNewPosition(event: Event): void {
    const img = event.target as HTMLElement;
    const parent = img.parentNode as HTMLElement;
    const newPosition = randomFromRange(
      INITIAL_TURTLE_POSITION,
      parent.clientHeight - img.clientHeight
    );
    img.style.top = `${newPosition}px`;
  }
}
