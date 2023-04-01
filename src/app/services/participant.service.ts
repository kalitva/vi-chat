import { Injectable } from '@angular/core';
import { Database, push, ref, set } from '@angular/fire/database';
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
}
