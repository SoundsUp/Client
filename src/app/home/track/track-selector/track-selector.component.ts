import { Component } from '@angular/core';
import { SpotifyTrack } from "../../../shared/models/spotify-track.model";

@Component({
  selector: 'app-track-selector',
  templateUrl: './track-selector.component.html',
  styleUrls: ['./track-selector.component.less']
})
export class TrackSelectorComponent {

  tracks: SpotifyTrack[];
  selectedTrack: SpotifyTrack;
  // @Output() selected = new EventEmitter<SpotifyTrack>();

  constructor() {
    this.tracks = [];
  }

  setTracks(tracks) {
    this.tracks = tracks;
  }

  onTrackSelection(track: SpotifyTrack) {
    this.selectedTrack = track;
    console.log("selected track", track);
    // this.selected.emit(track);
  }

}
