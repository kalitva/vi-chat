import { Injectable } from '@angular/core';
import { Database, push, ref, set } from '@angular/fire/database';
import { child, get } from '@firebase/database';
import { from, Observable } from 'rxjs';
import { Participant } from '../models/participant';

@Injectable({
  providedIn: 'root',
})
export class ParticipantService {
  constructor(private database: Database) { }

  addParticipant(sessionId: string, participant: Participant): string | null {
    const newParticipantRef = push(ref(this.database, `participants/${sessionId}`));
    set(newParticipantRef, participant);
    return newParticipantRef.key;
  }

  getParticipantsBySessionId(sessionId: string): Observable<{ [key: string]: Participant }> {
    return from(
      get(child(ref(this.database), `participants/${sessionId}`))
        .then(s => s.val())
    );
  }

  startVideoBroadcast(sessionId: string, participantId: string): void {
    set(ref(this.database, `participants/${sessionId}/${participantId}/videoBroadcast`), true);
  }

  stopVideoBroadcast(sessionId: string,  participantId: string): void {
    set(ref(this.database, `participants/${sessionId}/${participantId}/videoBroadcast`), false);
  }

  startMusicBroadcast(sessionId: string, participantId: string): void {
    set(ref(this.database, `participants/${sessionId}/${participantId}/musicBroadcast`), true);
  }

  stopMusicBroadcast(sessionId: string,  participantId: string): void {
    set(ref(this.database, `participants/${sessionId}/${participantId}/musicBroadcast`), false);
  }
}
