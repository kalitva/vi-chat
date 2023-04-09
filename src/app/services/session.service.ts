import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { child, Database, get, ref, set } from '@angular/fire/database';
import { catchError, from, map, mergeMap, Observable, of } from 'rxjs';
import { Session } from '../models/session';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private database: Database, private httpClient: HttpClient) { }

  openSession(session: Session): string {
    const sessionId = globalThis.crypto.randomUUID();
    set(ref(this.database, `sessions/${sessionId}`), session);
    return sessionId;
  }

  sessionExists(id: string): Observable<boolean> {
    return from(
      get(child(ref(this.database), `sessions/${id}`))
        .then(snapshot => snapshot.exists())
    );
  }

  // TODO set time out to random topic request
  getRandomTopic(): Observable<string> {
    const url = 'https://api.api-ninjas.com/v1/bucketlist'; // https://api-ninjas.com/api/bucketlist
    return from(get(ref(this.database, 'ninja-api-key')))
      .pipe(map(snapshot => snapshot.val()))
      .pipe(mergeMap(apiKey => {
        return this.httpClient.get<{item: string}>(url, { headers: { 'X-Api-Key': apiKey } });
      }))
      .pipe(
        map(response => response.item),
        catchError(e => {
          console.error(e);
          return of('No Topic');
        })
      );
  }
}
