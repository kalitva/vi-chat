import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-form',
  templateUrl: './welcome-form.component.html',
  styleUrls: ['./welcome-form.component.scss', '../../../styles/forms.scss'],
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
