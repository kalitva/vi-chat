import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private sessionService: SessionService) { }

  ngOnInit(): void {
    const sessionId = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
