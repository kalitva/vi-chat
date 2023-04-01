import { Injectable } from '@angular/core';
import { child, Database, get, ref, set } from '@angular/fire/database';
import { from, Observable } from 'rxjs';

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

  sessionExists(id: string): Observable<boolean> {
    return from(
      get(child(ref(this.database), `sessions/${id}`))
        .then(snapshot => snapshot.exists())
    );
  }
}
