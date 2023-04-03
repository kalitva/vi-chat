import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ParticipantService } from 'src/app/services/participant.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-create-session-form',
  templateUrl: './create-session-form.component.html',
  styleUrls: ['../../../styles/forms.scss', './create-session-form.component.scss'],
})
export class CreateSessionFormComponent {
  nameFormControl: FormControl;

  constructor(
    public location: Location,
    private router: Router,
    private participantService: ParticipantService,
    private sessionService: SessionService,
    private activatedRoute: ActivatedRoute
  ) {
    this.nameFormControl = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {
    this.nameFormControl.setValue(this.activatedRoute.snapshot.queryParamMap.get('name'));
  }

  createSession(topic: string): void {
    this.nameFormControl.markAsTouched();
    if (!this.nameFormControl.valid) {
      return;
    }
    if (topic) {
      this.doCreateSession(topic);
    } else {
      this.sessionService.getRandomTopic().subscribe(this.doCreateSession);
    }
  }

  private doCreateSession = (topic: string): void => {
    const sessionId = this.sessionService.openSession({ topic });
    const participantId = this.participantService.addParticipant(sessionId, {
      name: this.nameFormControl.value,
      active: true,
    });
    // TODO delete logging
    console.log('participantId: ' + participantId);
    console.log('sessionId: ' + sessionId);
    this.router.navigate(['session', sessionId]);
  };
}
