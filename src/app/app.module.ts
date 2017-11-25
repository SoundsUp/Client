import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { AppService } from "./app.service";
import { ApiService } from "./shared/services/api.service";
import { LogService } from "./shared/services/log.service";
import { ProfileModule } from "./profile/profile.module";

import { AppComponent } from './app.component';
import { ConversationsModule } from "./conversations/conversations.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ProfileModule,
    ConversationsModule
  ],
  providers: [
    AppService,
    ApiService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
