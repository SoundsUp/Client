import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Conversation } from "../../shared/models/conversation.model";
import { PrototypingService } from "../../prototyping.service";

@Component({
  selector: 'app-conversations-list',
  templateUrl: './conversations-list.component.html',
  styleUrls: ['./conversations-list.component.less']
})
export class ConversationsListComponent implements OnInit {
  @Output() select: EventEmitter<Conversation> = new EventEmitter();
  conversationList: Conversation[];
  selectedConversation: Conversation;

  constructor(private prototypingService: PrototypingService) {
  }

  ngOnInit() {
    this.conversationList = this.prototypingService.getConversationList();
    this.onSelect(this.conversationList[0]);
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
