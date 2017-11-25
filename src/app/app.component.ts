import { Component } from '@angular/core';
import { AppService } from "./app.service";
import { PrototypingService } from "./prototyping.service";
import { User } from "./shared/models/user.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'SoundsUp';
  conversationList: User[];


  constructor(private appService : AppService,
              private prototypingService: PrototypingService) {
  }

  ngOnInit() {
    this.conversationList = this.prototypingService.getConversationList();
  }


}
