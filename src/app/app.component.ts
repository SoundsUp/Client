import { Component } from '@angular/core';
import { AppService } from "./app.service";
import { PrototypingService } from "./prototyping.service";
import { User } from "./user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'SoundsUp';
  user: User;
  conversationList: User[];
  isExpandedProfile: boolean = false;

  constructor(private appService : AppService,
              private prototypingService: PrototypingService) {
  }

  ngOnInit() {
    this.user = this.prototypingService.getUser();
    this.conversationList = this.prototypingService.getConversationList();
  }

  getSomeData() {
      this.appService.getUser(1)
        .subscribe(user => this.user = user);
  }

  toggleProfile() {
    this.isExpandedProfile = !this.isExpandedProfile;
  }
}
