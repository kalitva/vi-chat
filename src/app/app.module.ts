// TODO correct this rule
/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { WelcomeFormComponent } from './views/welcome-form/welcome-form.component';
import { TopBarComponent } from './views/top-bar/top-bar.component';
import { SessionComponent } from './views/session/session.component';
import { ChatComponent } from './views/chat/chat.component';
import { FlowersBackgroundComponent } from './components/flowers-background/flowers-background.component';
import { JoinSessionFormComponent } from './views/join-session-form/join-session-form.component';
import { CreateSessionFormComponent } from './views/create-session-form/create-session-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './app-material.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeFormComponent,
    TopBarComponent,
    SessionComponent,
    ChatComponent,
    FlowersBackgroundComponent,
    JoinSessionFormComponent,
    CreateSessionFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
