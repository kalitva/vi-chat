import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private database: Database) { }

  createSession(uid: string): void {

  }

  addUser(uid: string): void {

  }

  removeUser(uid: string): void {

  }
}
