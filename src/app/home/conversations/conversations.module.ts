import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationsListComponent } from "./conversations-list/conversations-list.component";
import { ConversationsComponent } from './conversations.component';
import { ConversationComponent } from './conversation/conversation.component';
import { PrototypingService } from "../../prototyping.service";
import { ConversationsService } from "./conversations.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConversationsListComponent,
    ConversationsComponent,
    ConversationComponent
  ],
  exports: [ConversationsComponent, ConversationComponent],
  providers: [ConversationsService]
})
export class ConversationsModule { }
