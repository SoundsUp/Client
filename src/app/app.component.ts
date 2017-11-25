import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title: string = 'SoundsUp';
  isSidebarOpen: boolean = true;

  constructor() {
  }

  onMenuToggle() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
