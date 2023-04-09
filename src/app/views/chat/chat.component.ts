import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participant } from 'src/app/models/participant';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  participants: { [key: string]: Participant };

  constructor(
    private activatedRoute: ActivatedRoute,
    private participantService: ParticipantService
  ) { }

  ngOnInit(): void {
    const sessionId = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.participantService.getParticipantsBySessionId(sessionId)
      .subscribe(ps => this.participants = ps);
    this.participantService.startMusicBroadcast(sessionId, '-NSAfqc-2-qbj8wV4LBa');
  }
}
