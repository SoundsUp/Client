import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Track } from "../../shared/models/track.model";

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: []
})
export class TrackComponent {
  @Input() track: Track;
  @Input() hasSelectionButton: boolean = false;
  @Input() hasUnselectionButton: boolean = false;
  @Output() trackSelected = new EventEmitter<Track>();
  @Output() trackUnselected = new EventEmitter<Track>();

  select() {
    this.trackSelected.emit(this.track);
  }

  unselect() {
    this.trackUnselected.emit(this.track);
  }

}
