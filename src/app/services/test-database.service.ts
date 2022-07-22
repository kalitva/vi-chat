import { Injectable } from '@angular/core';
import {Database, DataSnapshot, onValue} from '@angular/fire/database';
import {getDatabase, ref, set} from '@firebase/database';

@Injectable({
  providedIn: 'root'
})
export class TestDatabaseService {

  constructor(private database: Database) {
  }

  readWrite(id: number, helloworld: { hello: string, world: string }): void {
    set(ref(this.database, 'hello/' + id), helloworld);
  }

  onHello(callback: (snapshot: DataSnapshot) => void): void {
    onValue(ref(this.database, 'hello/'), callback);
  }
}
