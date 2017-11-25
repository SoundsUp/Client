import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { AppService } from "./app.service";
import { ApiService } from "./shared/services/api.service";
import { MessageService } from "./shared/services/message.service";
import { PrototypingService } from "./prototyping.service";
import { ProfileModule } from "./profile/profile.module";

import { AppComponent } from './app.component';
import { ProfileComponent } from "./profile/profile.component";
import { ConversationsListComponent } from './conversations-list/conversations-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversationsListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ProfileModule
  ],
  providers: [
    AppService,
    ApiService,
    MessageService,
    PrototypingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
