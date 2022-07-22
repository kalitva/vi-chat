import { Component, OnInit } from '@angular/core';
import {TestDatabaseService} from './services/test-database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counter: number;

  constructor(private testDatabaseService: TestDatabaseService) {
    this.counter = 0;
  }

  ngOnInit(): void {
    this.testDatabaseService.onHello(ds => console.dir(ds.val()));
  }

  addHello(): void {
    this.testDatabaseService.readWrite(++this.counter, { hello: 'Hello', world: 'WOrld' });
  }
}
