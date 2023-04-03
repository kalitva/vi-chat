import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSessionFormComponent } from './views/create-session-form/create-session-form.component';
import { JoinSessionFormComponent } from './views/join-session-form/join-session-form.component';
import { SessionComponent } from './views/session/session.component';
import { WelcomeFormComponent } from './views/welcome-form/welcome-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeFormComponent },
  { path: 'session/:id', component: SessionComponent },
  { path: 'join', component: JoinSessionFormComponent },
  { path: 'create', component: CreateSessionFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
