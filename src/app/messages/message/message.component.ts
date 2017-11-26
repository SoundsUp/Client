import { Component, Input, OnInit } from '@angular/core';
import { Message } from "../../shared/models/message.model";
import { Conversation } from "../../shared/models/conversation.model";
import { User } from "../../shared/models/user.model";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  @Input() profile: User;
  @Input() conversation: Conversation;

  constructor() { }

  ngOnInit() {
  }

}
