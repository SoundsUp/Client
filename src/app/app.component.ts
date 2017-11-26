import { ChangeDetectorRef, Component } from '@angular/core';
import { Conversation } from "./shared/models/conversation.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title: string = 'SoundsUp';
  isSidebarOpen: boolean = true;
  currentConversation: Conversation;

  constructor(private cdr: ChangeDetectorRef) {
  }

  onMenuToggle() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  onConversationSelect(conversation) {
    this.currentConversation = conversation;
    this.cdr.detectChanges();
  }

}
