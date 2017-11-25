import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ConversationsListComponent } from "./conversations-list/conversations-list.component";
import { ConversationsComponent } from './conversations.component';
import { ConversationComponent } from './conversation/conversation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SearchComponent,
    ConversationsListComponent,
    ConversationsComponent,
    ConversationComponent
  ]
})
export class ConversationsModule { }
