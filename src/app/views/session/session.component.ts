import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participant } from 'src/app/models/participant';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent implements OnInit {
  participants: { [key: string]: Participant };

  constructor(
    private activatedRoute: ActivatedRoute,
    private participantService: ParticipantService
  ) { }

  ngOnInit(): void {
    const sessionId = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.participantService.getParticipantsBySessionId(sessionId)
      .subscribe(ps => this.participants = ps);
  }
}
