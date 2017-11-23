import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import { MessageService } from "./message.service";
import { AppService } from "./app.service";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AppService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
