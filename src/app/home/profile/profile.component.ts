import { Component, OnInit } from '@angular/core';
import { User } from "../../shared/models/user.model";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  user: User;
  isExpandedProfile: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getLoggedInUser();
  }

  toggleProfile(): void {
    this.isExpandedProfile = !this.isExpandedProfile;
  }

  logout(): void {
    this.authService.logout();
  }

}
