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

  constructor(private router: Router) {  }

  createSession(name: string): void {
    this.router.navigateByUrl(`/create?name=${name}`);
  }

  joinSession(name: string): void {
    this.router.navigateByUrl(`/join?name=${name}`);
  }
}
