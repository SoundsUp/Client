import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.less']
})
export class MessageFormComponent {
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
