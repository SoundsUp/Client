import { Component } from '@angular/core';
import { AppService } from "./app.service";
import { User } from "./user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'SoundsUp';
  user: User;

  constructor(private appService : AppService) {
    this.user = {
      id: 1,
      avatar: 'http://cdn3-www.dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/prance-8.jpg',
      displayName: 'Corgi Chan',
      email: 'bark@postman.com',
      description: 'I like Pina Coladas, and getting caught in the rain\n' +
      'I´m not much into health food, I am into champagne\n' +
      'I´ve got to meet you by tomorrow noon, and cut through all this red tape\n' +
      'At a bar called O\'Malley\'s, where we´ll plan our escape'
    };
  }

  getSomeData() {
      this.appService.getUser(1)
        .subscribe(user => this.user = user);
  }
}
