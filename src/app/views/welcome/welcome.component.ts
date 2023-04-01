import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { randomFromRange } from 'src/app/lib/utils';
import { SessionService } from 'src/app/services/session.service';

const INITIAL_TURTLE_POSITION = 100;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  nameFormControl: FormControl;

  constructor(private router: Router, private sessionService: SessionService) {
    this.nameFormControl = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {
  }

  startTurtleFromNewPosition(event: Event): void {
    const img = event.target as HTMLElement;
    const parent = img.parentNode as HTMLElement;
    const newPosition = randomFromRange(
      INITIAL_TURTLE_POSITION,
      parent.clientHeight - img.clientHeight
    );
    img.style.top = `${newPosition}px`;
  }

  createSession(): void {
    this.nameFormControl.markAsTouched();
    if (!this.nameFormControl.valid) {
      return;
    }
    const sessionId = globalThis.crypto.randomUUID();
    const userId = globalThis.crypto.randomUUID();
    this.sessionService.createSession(sessionId);
    this.sessionService.addUser(userId);
    this.router.navigate(['session', sessionId]);
  }
}
