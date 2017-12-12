import { Component, Input } from '@angular/core';
import { Message } from "../../../shared/models/message.model";
import { User } from "../../../shared/models/user.model";
import { Conversation } from "../../../shared/models/conversation.model";

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.less']
})
export class MessagesListComponent {
  @Input() conversation: Conversation;
  @Input() messageList: Message[];
  @Input() profile: User;

  constructor() { }

}
