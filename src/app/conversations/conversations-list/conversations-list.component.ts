import { Component, OnInit } from '@angular/core';
import { Conversation } from "../../shared/models/conversation.model";
import { PrototypingService } from "../../prototyping.service";

@Component({
  selector: 'app-conversations-list',
  templateUrl: './conversations-list.component.html',
  styleUrls: ['./conversations-list.component.less']
})
export class ConversationsListComponent implements OnInit {
  conversationList: Conversation[];

  constructor(private prototypingService: PrototypingService) {
  }

  ngOnInit() {
    this.conversationList = this.prototypingService.getConversationList();
  }

  onSelect(conversation) {
    console.log(conversation);
  }
}
