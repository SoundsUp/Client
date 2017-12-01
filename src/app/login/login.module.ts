import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from './login.component';
import { LoginService } from "./login.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule { }
