import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileModule } from "./profile/profile.module";
import { ConversationsModule } from "./conversations/conversations.module";
import { MessagesModule } from "./messages/messages.module";

import { HomeComponent } from './home.component';
import { TrackModule } from "./track/track.module";

@NgModule({
  imports: [
    CommonModule,
    ProfileModule,
    ConversationsModule,
    MessagesModule,
    TrackModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
