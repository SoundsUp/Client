import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { RegistrationComponent } from "./registration.component";
import { PrototypingService } from "../prototyping.service";
import { RegistrationService } from "../registration.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [PrototypingService, RegistrationService],
  declarations: [RegistrationComponent],
  exports: [RegistrationComponent],
})
export class RegistrationModule { }
