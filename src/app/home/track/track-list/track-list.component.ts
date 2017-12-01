import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SpotifyTrack } from "../../../shared/models/spotify-track.model";

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.less']
})
export class TrackListComponent {

  @Input() tracks: SpotifyTrack[];
  @Output() trackSelected = new EventEmitter<SpotifyTrack>();

  select(track: SpotifyTrack) {
    this.trackSelected.emit(track);
  }

}
