import { Component } from '@angular/core';
import { AppService } from "./app.service";
import { User } from "./user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: User;

  constructor(private appService : AppService) {
  }

  getSomeData() {
      this.appService.getUser(1)
        .subscribe(user => this.user = user);
  }
}
