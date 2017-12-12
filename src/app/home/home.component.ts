import { ChangeDetectorRef, Component } from '@angular/core';
import { Conversation } from "../shared/models/conversation.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  title: string = 'SoundsUp';
  isSidebarOpen: boolean = true;
  currentConversation: Conversation;

  constructor(private cdr: ChangeDetectorRef) {
  }

  onMenuToggle() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  onConversationSelect(conversation) {
    console.log(this.currentConversation);
    this.currentConversation = conversation;
    this.cdr.detectChanges();
  }

}
