import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { randomFromRange } from 'src/app/lib/utils';
import { ParticipantService } from 'src/app/services/participant.service';
import { SessionService } from 'src/app/services/session.service';

const INITIAL_TURTLE_POSITION = 100;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  nameFormControl: FormControl;
  sessionIdFormControl: FormControl;

  showSessionIdInput: boolean;

  constructor(
    private router: Router,
    private participantService: ParticipantService,
    private sessionService: SessionService
  ) {
    this.nameFormControl = new FormControl('', [Validators.required]);
    this.sessionIdFormControl = new FormControl('', [Validators.required]);
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
    const sessionId = this.sessionService.openSession();
    const participantId = this.participantService.addParticipant(sessionId, {
      name: this.nameFormControl.value,
      active: true,
    });
    // TODO delete logging
    console.log('participantId: ' + participantId);
    console.log('sessionId: ' + sessionId);
    this.router.navigate(['session', sessionId]);
  }

  joinSession(): void {
    this.nameFormControl.markAsTouched();
    if (!this.nameFormControl.valid) {
      return;
    }
    if (!this.showSessionIdInput) {
      this.showSessionIdInput = true;
      return;
    }
    this.sessionIdFormControl.markAsTouched();
    if (!this.sessionIdFormControl.valid) {
      return;
    }
    // TODO validate session exists
    const sessionId = this.sessionIdFormControl.value;
    const participantId = this.participantService.addParticipant(sessionId, {
      name: this.nameFormControl.value,
      active: true,
    });
    // TODO delete logging
    console.log('participantId: ' + participantId);
    console.log('sessionId: ' + sessionId);
    this.router.navigate(['session', sessionId]);
  }
}
