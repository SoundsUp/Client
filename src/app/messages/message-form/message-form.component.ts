import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-message-input',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.less']
})
export class MessageFormComponent implements OnInit {
  @Output() enter: EventEmitter<string> = new EventEmitter();
  message: string = '';
  submitted: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
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
