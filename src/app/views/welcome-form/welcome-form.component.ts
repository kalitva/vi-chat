import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParticipantService } from 'src/app/services/participant.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-welcome-form',
  templateUrl: './welcome-form.component.html',
  styleUrls: ['./welcome-form.component.scss'],
})
export class WelcomeFormComponent {
  nameFormControl: FormControl;

  constructor(
    private router: Router,
    private participantService: ParticipantService,
    private sessionService: SessionService
  ) {
    this.nameFormControl = new FormControl('', [Validators.required]);
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

  joinSession(name: string): void {
    this.router.navigateByUrl(`/join?name=${name}`);
  }
}
