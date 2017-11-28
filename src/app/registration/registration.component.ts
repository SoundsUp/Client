import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PrototypingService } from "../prototyping.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  avatars: string[];
  selectedAvatar: string;

  constructor(private prototypingService: PrototypingService,
              private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.registrationForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: '',
      displayName: '',
      description: ''
    });
  }

  ngOnInit() {
    this.avatars = this.prototypingService.getAvatars();
    this.selectedAvatar = this.avatars[0];
  }

  onAvatarSelect(avatar: string) {
    this.selectedAvatar = avatar;
  }

}
