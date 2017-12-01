import { Component, EventEmitter, Output } from '@angular/core';

import { Conversation } from "../../shared/models/conversation.model";

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.less']
})
export class ConversationsComponent {
  @Output() select: EventEmitter<Conversation> = new EventEmitter();

  constructor() {
  }

  onConversationSelect(conversation) {
    this.select.emit(conversation);
  }

}
