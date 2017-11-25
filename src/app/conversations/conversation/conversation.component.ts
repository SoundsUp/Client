import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Conversation } from "../../shared/models/conversation.model";

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.less']
})
export class ConversationComponent implements OnInit {
  @Input() conversation: Conversation;
  @Input() isTopbar?: boolean;
  @Output() select: EventEmitter<Conversation> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onConversationClick() {
    this.select.emit(this.conversation);
  }



}
