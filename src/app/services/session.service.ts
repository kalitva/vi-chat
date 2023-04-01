import { Injectable } from '@angular/core';
import { Database, push, ref, set } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private database: Database) { }

  openSession(): string {
    const sessionId = globalThis.crypto.randomUUID();
    set(ref(this.database, `sessions/${sessionId}`), '');
    return sessionId;
  }

  sessionExists(id: string): boolean {
    return id === '123';
  }
}
