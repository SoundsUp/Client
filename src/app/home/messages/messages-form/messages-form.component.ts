import { Component, EventEmitter, Output } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-messages-form',
  templateUrl: './messages-form.component.html',
  styleUrls: ['./messages-form.component.less']
})
export class MessagesFormComponent {
  @Output() enter: EventEmitter<string> = new EventEmitter();
  message: string = '';
  submitted: boolean = false;

  constructor() {
  }

  onSubmit(form) {
    this.submitted = true;
    if (form.valid) {
      this.enter.emit(this.message);
    } else {
      console.log('You need to write something first!');
    }

  }

}
