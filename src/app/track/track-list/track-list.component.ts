import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Track } from "../../shared/models/track.model";

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.less']
})
export class TrackListComponent {

  @Input() tracks: Track[];
  @Output() trackSelected = new EventEmitter<Track>();

  select(track: Track) {
    this.trackSelected.emit(track);
  }

}
