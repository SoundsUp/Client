import { Component, Input, OnInit } from '@angular/core';
import { PrototypingService } from "../../prototyping.service";
import { Message } from "../../shared/models/message.model";
import { User } from "../../shared/models/user.model";
import { Conversation } from "../../shared/models/conversation.model";

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.less']
})
export class MessagesListComponent implements OnInit {
  @Input() conversation: Conversation;
  messageList: Message[];
  profile: User;

  constructor(private prototypingService: PrototypingService) { }

  ngOnInit() {
    this.profile = this.prototypingService.getUser();
    this.messageList = this.prototypingService.getMessages(this.conversation);
  }

}
