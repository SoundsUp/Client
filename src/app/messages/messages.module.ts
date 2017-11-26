import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from "./messages.component";
import { MessageComponent } from './message/message.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { PrototypingService } from "../prototyping.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [PrototypingService],
  declarations: [
    MessagesComponent,
    MessageComponent,
    MessagesListComponent],
  exports: [
    MessagesComponent
  ]
})
export class MessagesModule {
}
