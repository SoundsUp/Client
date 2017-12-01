import { Component } from '@angular/core';
import { Track } from "../../shared/models/track.model";

@Component({
  selector: 'app-track-selector',
  templateUrl: './track-selector.component.html',
  styleUrls: ['./track-selector.component.less']
})
export class TrackSelectorComponent {

  tracks: Track[];
  selectedTrack: Track;
  // @Output() selected = new EventEmitter<Track>();

  constructor() {
    this.tracks = [];
  }

  setTracks(tracks) {
    this.tracks = tracks;
  }

  onTrackSelection(track: Track) {
    this.selectedTrack = track;
    console.log("selected track", track);
    // this.selected.emit(track);
  }

}
