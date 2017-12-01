import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PrototypingService } from "../prototyping.service";
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  avatars: string[];

  constructor(private prototypingService: PrototypingService,
              private formBuilder: FormBuilder,
              private authService: AuthService) {
    this.createForm();
  }

  createForm() {
    this.registrationForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: '',
      displayName: '',
      description: '',
      avatar: ''
    });
  }

  ngOnInit() {
    this.avatars = this.prototypingService.getAvatars();
    this.onAvatarSelect(this.avatars[0]);
  }

  onAvatarSelect(avatar: string) {
    this.registrationForm.patchValue({
      avatar: avatar
    });
  }

  onSubmit(form) {
    console.log(form);
    this.authService.register(form);
  }

}
