import { Component, Input, OnInit } from '@angular/core';
import { Conversation } from "../../shared/models/conversation.model";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent implements OnInit {
  @Input() conversation: Conversation;

  constructor() { }

  ngOnInit() {
    // TODO get messages from a conversation
  }

  onMessageEnter(message: string): void {
    console.log(message);
  }

}
