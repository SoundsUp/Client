import { Component, OnInit } from '@angular/core';
import { User } from "../shared/models/user.model";
import { ProfileService } from "./profile.service";
import { PrototypingService } from "../prototyping.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  user: User;
  isExpandedProfile: boolean = false;

  constructor(private profileService : ProfileService,
              private prototypingService: PrototypingService) { }

  ngOnInit() {
    this.user = this.prototypingService.getUser();
  }

  getSomeData() {
    this.profileService.getUser(1)
      .subscribe(user => this.user = user);
  }

  toggleProfile() {
    this.isExpandedProfile = !this.isExpandedProfile;
  }

}
