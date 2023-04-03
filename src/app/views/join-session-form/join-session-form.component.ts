import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipantService } from 'src/app/services/participant.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-join-session-form',
  templateUrl: './join-session-form.component.html',
  styleUrls: ['../../../styles/forms.scss', './join-session-form.component.scss'],
})
export class JoinSessionFormComponent implements OnInit {
  nameFormControl: FormControl;
  sessionIdFormControl: FormControl;

  constructor(
    public location: Location,
    private router: Router,
    private participantService: ParticipantService,
    private sessionService: SessionService,
    private activatedRoute: ActivatedRoute
  ) {
    this.nameFormControl = new FormControl('', [Validators.required]);
    this.sessionIdFormControl = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {
    this.nameFormControl.setValue(this.activatedRoute.snapshot.queryParamMap.get('name'));
  }

  joinSession(): void {
    this.nameFormControl.markAsTouched();
    this.sessionIdFormControl.markAsTouched();
    if (!this.nameFormControl.valid || !this.sessionIdFormControl.valid) {
      return;
    }
    const sessionId = this.sessionIdFormControl.value;
    this.sessionService.sessionExists(sessionId).subscribe(exists => {
      if (!exists) {
        this.sessionIdFormControl.setErrors({ sessionNotFound: true });
        return;
      }
      const participantId = this.participantService.addParticipant(sessionId, {
        name: this.nameFormControl.value,
        active: true,
      });
      // TODO delete logging
      console.log('participantId: ' + participantId);
      console.log('sessionId: ' + sessionId);
      this.router.navigate(['session', sessionId]);
    });
  }
}
