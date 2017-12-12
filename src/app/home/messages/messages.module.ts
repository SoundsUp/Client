import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from "./messages.component";
import { MessageComponent } from './message/message.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { PrototypingService } from "../../prototyping.service";
import { MessagesFormComponent } from './messages-form/messages-form.component';
import { FormsModule } from "@angular/forms";
import { MessagesService } from "./messages.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [MessagesService],
  declarations: [
    MessagesComponent,
    MessageComponent,
    MessagesListComponent,
    MessagesFormComponent],
  exports: [
    MessagesComponent
  ]
})
export class MessagesModule {
}
