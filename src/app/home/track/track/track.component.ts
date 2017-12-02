import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SpotifyTrack } from "../../../shared/models/spotify-track.model";

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: []
})
export class TrackComponent {
  @Input() track: SpotifyTrack;
  @Input() hasSelectionButton: boolean = false;
  @Input() hasUnselectionButton: boolean = false;
  @Output() trackSelected = new EventEmitter<SpotifyTrack>();
  @Output() trackUnselected = new EventEmitter<SpotifyTrack>();

  select() {
    if (this.hasSelectionButton) {
      this.trackSelected.emit(this.track);
    }
  }

  unselect() {
    this.trackUnselected.emit(this.track);
  }

}
