import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Conversation } from "../../shared/models/conversation.model";
import { MessagesService } from "./messages.service";
import { User } from "../../shared/models/user.model";
import { Message } from "../../shared/models/message.model";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent implements OnInit, OnChanges {
  @Input() conversation: Conversation;
  messagesList: Message[];
  profile: User;

  constructor(private messagesService: MessagesService,
              private authService: AuthService) { }

  ngOnInit() {
    this.profile = this.authService.getLoggedInUser();
  }

  ngOnChanges() {
    if (this.conversation) {
      this.messagesService.getMessages(this.conversation.id)
      .subscribe((messages: Message[]) => {
        this.messagesList = messages;
      }); 
    } else {
      console.info('No conversation was found.')
    }
  }

  onMessageEnter(message: string): void {
    // this.messagesService.sendMessage(message).take(1).subscribe(() => {
    //   this.messagesService.getMessages.
    // })
  }

}
