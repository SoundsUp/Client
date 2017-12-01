import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { AppRouterModule } from "./app-router.module";
import { RegistrationModule } from "./registration/registration.module";
import { LoginModule } from "./login/login.module";
import { HomeModule } from "./home/home.module";

import { ApiService } from "./shared/services/api.service";
import { LogService } from "./shared/services/log.service";

import { AppComponent } from './app.component';
import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRouterModule,

    RegistrationModule,
    LoginModule,
    HomeModule
  ],
  providers: [
    ApiService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
