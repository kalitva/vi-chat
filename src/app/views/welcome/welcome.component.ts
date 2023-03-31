import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  private readonly INITIAL_TURTLE_POSITION = 100;

  nameFormControl: FormControl;

  constructor() {
    this.nameFormControl = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {
  }

  startTurtleFromNewPosition(event: Event): void {
    const img = event.target as HTMLElement;
    const parent = img.parentNode as HTMLElement;
    const newPosition = this.randomFromRange(
      this.INITIAL_TURTLE_POSITION,
      parent.clientHeight - img.clientHeight
    );
    img.style.top = `${newPosition}px`;
  }

  private randomFromRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
