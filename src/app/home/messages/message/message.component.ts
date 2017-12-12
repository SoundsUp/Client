import { Component, Input, OnInit } from '@angular/core';
import { Message } from "../../../shared/models/message.model";
import { Conversation } from "../../../shared/models/conversation.model";
import { User } from "../../../shared/models/user.model";
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent implements OnChanges {
  private _message: Message;
  @Input() profile: User;
  @Input() conversation: Conversation;

  constructor() { }

  ngOnChanges() {
  }
  @Input('message') 
  public set message(value: Message) {
    console.debug('a new message is set', value)
    this._message = value;
  }

  public get message() {
    return this._message;
  }

}
