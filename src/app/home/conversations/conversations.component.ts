import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Conversation } from "../../shared/models/conversation.model";
import { ConversationsService } from "./conversations.service";

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.less']
})
export class ConversationsComponent implements OnInit {
  @Output() select: EventEmitter<Conversation> = new EventEmitter();
  correspondents: Conversation[];

  constructor(private conversationsService: ConversationsService) {
  }

  ngOnInit(): void {
    this.conversationsService.getCorrespondents()
      .subscribe((correspondents) => {
        console.log('# correspondents', correspondents);
        this.correspondents = correspondents
      })
  }

  onConversationSelect(conversation) {
    this.select.emit(conversation);
  }

}
