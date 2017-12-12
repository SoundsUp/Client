import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Conversation } from "../../../shared/models/conversation.model";

@Component({
  selector: 'app-conversations-list',
  templateUrl: './conversations-list.component.html'
})
export class ConversationsListComponent implements OnChanges {
  @Output() select: EventEmitter<Conversation> = new EventEmitter();
  @Input() conversationList: Conversation[];
  selectedConversation: Conversation;

  constructor() {
  }

  ngOnChanges() {
    if (this.conversationList && this.conversationList.length > 0) {
      this.onSelect(this.conversationList[0]);
    }
  }

  onSelect(conversation) {
    if (conversation) {
      this.select.emit(conversation);
      this.conversationList.forEach(conversation => conversation.isSelected = false);
      conversation.isSelected = true;
      this.selectedConversation = conversation;
    }
  }
}
